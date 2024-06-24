import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Keyboard } from "react-native";
import { cleanMask } from "masks-br";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { useCurrentUser } from "@modules/SignIn/hooks/useRegisterUser";
import {
  CreateUserSchema,
  IFormNewUserSchema,
} from "@shared/types/validations/user";
import { ICreateUserPayload } from "@shared/types/entities/User";
import { showToast } from "@shared/store/useToastStore";
import { links_general } from "@shared/constants/links";
import { InputTextMaster } from "@shared/components/TextFields/InputText";
import { ButtonDefault } from "@shared/components/Buttons/Default";
import { useCurrentUserStore } from "@shared/store/useCurrentUserStore";
import { app } from "@shared/constants/generics";

import { InputPhone } from "../../InputsLocais/InputPhone";
import { StrengthBar } from "../../StrengthBar";
import { CheckPasswordCard } from "../CheckPassword";
import * as S from "./styles";

export const SignUpCards = () => {
  const { navigate } = useNavigation();
  const {
    control,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IFormNewUserSchema>({
    resolver: zodResolver(CreateUserSchema),
    mode: "onChange",
  });
  const {
    paramRef,
    selectedDDI,
    handleSelectDDI,
    handleUuidRegister,
    updateCurrentUser,
  } = useCurrentUserStore((store) => {
    return {
      paramRef: store.paramRef,
      selectedDDI: store.selectedDDI,
      handleSelectDDI: store.handleSelectDDI,
      updateCurrentUser: store.updateCurrentUser,
      handleUuidRegister: store.handleUuidRegister,
    };
  });
  const { mutate, isLoading } = useCurrentUser();

  const _password = watch("new_password");
  const _password_confirm = watch("password_confirm");

  const onSubmitSignUp = async (userData: ICreateUserPayload) => {
    Keyboard.dismiss();

    const payload = {
      name: userData.name,
      email: userData.new_email,
      password: userData.new_password,
      passwordConfirmation: userData.password_confirm,
      phoneNumber: `${selectedDDI.dialCode}${cleanMask(userData.phone)}`,
      userTermsReadAt: new Date(),
      inviteCode: paramRef,
      source: app,
    };

    mutate(payload, {
      onSuccess: ({ data }) => {
        console.log(data);
        if (data) {
          handleUuidRegister(data?.uuid);
          updateCurrentUser(userData);
          showToast({
            type: "success",
            message: "Registro concluído com sucesso!",
          });
          navigate("SelectedPhone");
        }
      },
      onError(error: any) {
        console.log({ error });
        showToast({
          type: "error",
          message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
        });
      },
    });
  };

  const handleNavigationTerm = () => {
    Linking.openURL(links_general.terms);
  };

  return (
    <S.Wrapper>
      <S.Title>Nova conta</S.Title>
      <InputTextMaster
        label="Nome e sobrenome"
        name="name"
        placeholder="Nome e sobrenome"
        control={control}
        type="user"
        errorMessage={errors.name?.message}
        autoCapitalize="words"
      />
      <InputTextMaster
        label="E-mail"
        name="new_email"
        placeholder="E-mail"
        control={control}
        type="email"
        keyboardType="email-address"
        errorMessage={errors.new_email?.message || ""}
      />
      <InputPhone
        label="Telefone"
        name="phone"
        control={control}
        setValue={setValue}
        handleSelectDDI={handleSelectDDI}
        type="cel-phone"
        keyboardType="number-pad"
        maxLength={15}
        maskCustom={selectedDDI?.mask ? selectedDDI?.mask : "999 999 999 999"}
        errorMessage={errors.phone?.message || ""}
      />
      <InputTextMaster
        label="Senha"
        name="new_password"
        placeholder="Senha"
        control={control}
        type="password"
        secureTextEntry
        errorMessage={errors.new_password?.message || ""}
      />
      <InputTextMaster
        label="Repetir senha"
        name="password_confirm"
        placeholder="Repetir senha"
        control={control}
        type="password"
        secureTextEntry
        errorMessage={errors.password_confirm?.message || ""}
      />

      <CheckPasswordCard
        password={_password}
        password_confirm={_password_confirm}
      />

      <StrengthBar password={_password} />

      <S.Description>
        Ao criar conta, você confirma que leu e concorda com os{" "}
        <S.TitleFooter onPress={handleNavigationTerm}>
          termos de uso
        </S.TitleFooter>{" "}
        da Kirvano
      </S.Description>
      <ButtonDefault
        title="Criar conta grátis"
        variant="info"
        fontSize="large"
        isLoading={isLoading}
        disabled={!isValid}
        onPress={handleSubmit(onSubmitSignUp)}
      />
    </S.Wrapper>
  );
};
