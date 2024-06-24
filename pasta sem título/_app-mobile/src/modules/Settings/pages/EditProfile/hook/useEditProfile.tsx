import { Keyboard, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { useProfileUser } from "@modules/Settings/hooks/useProfile";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { showToast } from "@shared/store/useToastStore";
import {
  EnumAdditionalDocumentType,
  EnumDocumentType,
  TUpdateProfileSchema,
  UpdateProfileSchema,
} from "@shared/types/validations/profile";
import { format } from "@shared/utils/formatters";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useRef } from "react";
import { EnumBiometryStatus } from "@shared/types";
import { useFetchBalances } from "@modules/Dashboard/hooks";

const MINIMUM_WITHDRAWAL_VALUE = 500;

export const useEditProfile = () => {
  const refScroll = useRef<ScrollView>(null);
  const { goBack } = useNavigation();
  const { mutate: mutateProfile, isLoading: isLoadingProfile } =
    useProfileUser();
  const { data: userData, refetch: refetchUserMe } = useFetchMe();
  const { data: balances } = useFetchBalances();
  const methods = useForm<TUpdateProfileSchema>({
    mode: "onChange",
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      language: "Português",
      name: userData?.name || undefined,
      birthDate: userData?.birthDate || "",
      documentType: userData?.documentType as EnumDocumentType,
      document: userData?.document || "",
      additionalDocumentType:
        userData?.additionalDocumentType as EnumAdditionalDocumentType,
      additionalDocument: userData?.additionalDocument || "",
      additionalDocumentIssueDate: userData?.additionalDocumentIssueDate || "",
      country: userData?.address?.country || "",
      zipCode: userData?.address?.zipCode || "",
      street: userData?.address?.street || "",
      number: userData?.address?.number || "",
      city: userData?.address?.city || "",
      state: userData?.address?.state || "",
      district: userData?.address?.district || "",
      complement: userData?.address?.complement || "",
      email: userData?.email || "",
      phoneNumber: userData?.phoneNumber || "",
      nationality: "Brasil",
    },
  });

  console.log("errors", methods.formState.errors);

  const circleTextAvatar = useMemo(() => {
    const _title = userData?.name
      ? (userData?.name?.split(" ") as string[])
      : "K  K";
    const text_avatar = `${_title[0].substring(0, 1).toLocaleUpperCase()}${
      _title[_title?.length - 1]
        ? _title[_title?.length - 1].substring(0, 1).toLocaleUpperCase()
        : ""
    }`;
    return text_avatar;
  }, [userData]);

  const isValuesBalance =
    balances?.availableBalance >= MINIMUM_WITHDRAWAL_VALUE;
  const isBiometrics = userData?.biometryStatus === EnumBiometryStatus.APPROVED;

  const handleSubmitUpdateUser = async (data: TUpdateProfileSchema) => {
    Keyboard.dismiss();

    const payload = {
      name: data.name,
      nationality: data.nationality,
      language: data.language,
      documentType: data.documentType,
      document: data.document ? format.onlyNumbers(data.document) : null,
      additionalDocument: data.additionalDocument,
      additionalDocumentType: data.additionalDocumentType,
      additionalDocumentIssueDate: data.additionalDocumentIssueDate
        ? format.dateToString(
            format.stringToDate(data.additionalDocumentIssueDate, "dd/MM/yyyy"),
            "yyyy-MM-dd"
          )
        : null,
      birthDate: data.birthDate
        ? format.dateToString(
            format.stringToDate(data.birthDate, "dd/MM/yyyy"),
            "yyyy-MM-dd"
          )
        : null,
      address: JSON.parse(
        JSON.stringify({
          country: data.country,
          zipCode: data.zipCode,
          street: data.street,
          number: data.number,
          complement: data.complement,
          district: data.district,
          city: data.city,
          state: data.state,
        })
      ),
    };

    if (!data?.additionalDocumentType) {
      showToast({
        type: "error",
        message: "Escolha o tipo de documento extra.",
      });
    }

    if (!data?.documentType) {
      showToast({
        type: "error",
        message: "Escolha o tipo de documento primário.",
      });
    }

    mutateProfile(payload, {
      onSuccess: () => {
        refetchUserMe();
        goBack();
        showToast({
          type: "success",
          message: "Perfil atualizado com sucesso!",
        });
      },
      onError: (error: any) => {
        if (error.response?.data?.message.includes("CPF")) {
          methods.setValue("document", "");
          methods.setError("document", {
            message: error.response?.data?.message,
          });
          refScroll.current?.scrollTo({
            y: 200,
            animated: true,
          });
          showToast({
            type: "error",
            message: error.response?.data?.message || "Ops! Algo deu errado.",
          });
          return;
        }
        return showToast({
          type: "error",
          message: error.response?.data?.message || "Ops! Algo deu errado.",
        });
      },
    });
  };

  return {
    methods,
    userData,
    refScroll,
    isBiometrics,
    isValuesBalance,
    circleTextAvatar,
    isLoadingProfile,
    goBack,
    handleSubmit: methods.handleSubmit(handleSubmitUpdateUser),
  };
};
