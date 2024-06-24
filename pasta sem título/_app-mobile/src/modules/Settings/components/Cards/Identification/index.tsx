import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useFormContext } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { TextInput } from "react-native";
import { Modalize } from "react-native-modalize";

import Period from "@shared/assets/icons/svg/sales/period.svg";
import { TextInputMaskMethods } from "react-native-masked-text";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { OptionsProfile } from "@modules/Settings/mocks/options_profile";
import { AlertContext } from "@shared/context/AlertContext";
import { showToast } from "@shared/store/useToastStore";
import { IUserUpdate } from "@shared/types/entities/User";
import { useUpdateContact } from "@shared/store/useUpdateContact";

import { SelectOptionModal } from "../../Modal/SelectOption";
import { UpdatePhoneNumber } from "../UpdatePhoneNumber";
import { UpdateEmail } from "../UpdateEmail";
import { InputTextEdit } from "../../Inputs/InputText";
import * as S from "./styles";

interface IdentificationProps {
  isLoading: boolean;
}

export const IdentificationCard = ({ isLoading }: IdentificationProps) => {
  const theme = useTheme();
  const { data: userData } = useFetchMe();
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<IUserUpdate>();
  const { biometry } = useContext(AlertContext);
  const modalSelectNationalityRef = useRef<Modalize>(null);
  const modalSelectLanguageRef = useRef<Modalize>(null);
  const modalSelectDocumentRef = useRef<Modalize>(null);
  const modalSelectDocumentExtraRef = useRef<Modalize>(null);
  const documentInputRef = useRef<TextInputMaskMethods>(null);
  const documentExtraInputRef = useRef<TextInput>(null);
  const [isNationality, setIsNationality] = useState<boolean>(false);
  const [isLanguage, setIsLanguage] = useState<boolean>(false);
  const [isDocumentType, setIsDocumentType] = useState<boolean>(false);
  const [isAdditionalDocumentType, setIsAdditionalDocumentType] =
    useState<boolean>(false);
  const { handleChangePhoneNumber, handleChangeEmailCurrent } =
    useUpdateContact((store) => {
      return {
        handleChangePhoneNumber: store.handleChangePhoneNumber,
        handleChangeEmailCurrent: store.handleChangeEmailCurrent,
      };
    });

  const _nationality = watch("nationality");
  const _language = watch("language");
  const _documentType = watch("documentType");
  const _additionalDocumentType = watch("additionalDocumentType");

  useEffect(() => {
    setValue("name", userData?.name || "");
    setValue("nationality", "Brasil");
    setValue("language", "Português");
    setValue(
      "documentType",
      userData?.documentType ? userData?.documentType : "CPF"
    );
    setValue("document", userData?.document || "");
    setValue(
      "additionalDocumentType",
      userData?.additionalDocumentType
        ? userData?.additionalDocumentType
        : "IDENTITY_CARD"
    );
    setValue("additionalDocument", userData?.additionalDocument || "");
    setValue(
      "additionalDocumentIssueDate",
      userData?.additionalDocumentIssueDate || ""
    );
    setValue("birthDate", userData?.birthDate || "");
    handleChangePhoneNumber(userData?.phoneNumber || "");
    handleChangeEmailCurrent(userData?.email || "");
  }, []);

  const isDisabled = userData && biometry;

  const handleSelectNationality = () => {
    setIsNationality(true);
    modalSelectNationalityRef.current?.open();
  };

  const handleSelectLanguage = () => {
    setIsLanguage(true);
    modalSelectLanguageRef.current?.open();
  };

  const handleSelectDocument = () => {
    setIsDocumentType(true);
    modalSelectDocumentRef.current?.open();
  };

  const handleSelectDocumentExtra = () => {
    setIsAdditionalDocumentType(true);
    modalSelectDocumentExtraRef.current?.open();
  };

  const handleSelectOptionNationality = (data: string) => {
    if (data === "") {
      showToast({
        type: "error",
        message: "Escolha primeiro uma nacionalidade válido.",
      });
      return;
    }
    setIsNationality(false);
    setValue("nationality", data);
    modalSelectNationalityRef.current?.close();
  };

  const handleSelectOptionLanguage = (data: string) => {
    if (data === "") {
      showToast({
        type: "error",
        message: "Escolha primeiro uma idioma válido.",
      });
      return;
    }
    setIsLanguage(false);
    setValue("language", data);
    modalSelectLanguageRef.current?.close();
  };

  const handleSelectOptionDocumentType = (data: string) => {
    if (data === "") {
      showToast({
        type: "error",
        message: "Escolha o tipo de documento primário válido.",
      });
      return;
    }
    setIsDocumentType(false);
    setValue("documentType", data);
    modalSelectDocumentRef.current?.close();
    documentInputRef.current?.getElement().focus();
  };

  const handleSelectOptionAdditionalDocumentType = (data: string) => {
    if (data === "") {
      showToast({
        type: "error",
        message: "Escolha o tipo de documento extra válido.",
      });
      return;
    }
    setIsAdditionalDocumentType(false);
    setValue("additionalDocumentType", data);
    modalSelectDocumentExtraRef.current?.close();
    documentExtraInputRef.current?.focus();
  };

  const documentNationality = useMemo(() => {
    return OptionsProfile.country.filter((item) => item.value === _nationality);
  }, [_nationality]);

  const documentLanguages = useMemo(() => {
    return OptionsProfile.languages.filter((item) => item.value === _language);
  }, [_language]);

  const documentPrimary = useMemo(() => {
    return OptionsProfile.documentTypes.filter(
      (item) => item.value === _documentType
    )[0];
  }, [_documentType]);

  const documentExtra = useMemo(() => {
    return OptionsProfile.extraDocumentTypes.filter(
      (item) => item.value === _additionalDocumentType
    )[0];
  }, [_additionalDocumentType]);

  return (
    <S.Wrapper>
      {isLoading && <S.Container />}

      <S.FieldContainer>
        <S.Title>Identificação</S.Title>
        <InputTextEdit
          control={control}
          name="name"
          label="Nome"
          editable={isDisabled}
          errorMessage={errors?.name?.message}
        />

        <S.WrapperButton>
          <S.Label>Nacionalidade</S.Label>
          <S.SelectButton
            onPress={handleSelectNationality}
            active={isNationality}
            disabled={!isDisabled}
          >
            <S.LabelSelect
              isSelect={documentNationality[0]?.label !== "Selecione"}
            >
              {documentNationality[0]?.label}
            </S.LabelSelect>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={
                documentExtra?.label !== "Selecione"
                  ? theme.colors.color_neutral_40
                  : theme.colors.color_neutral_60
              }
            />
          </S.SelectButton>
          {errors.nationality && (
            <S.Error>{errors?.nationality?.message}</S.Error>
          )}
        </S.WrapperButton>

        <S.WrapperButton>
          <S.Label>Idioma</S.Label>
          <S.SelectButton
            onPress={handleSelectLanguage}
            active={isLanguage}
            disabled={!isDisabled}
          >
            <S.LabelSelect
              isSelect={documentLanguages[0]?.label !== "Selecione"}
            >
              {documentLanguages[0]?.label}
            </S.LabelSelect>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={
                documentExtra?.label !== "Selecione"
                  ? theme.colors.color_neutral_40
                  : theme.colors.color_neutral_60
              }
            />
          </S.SelectButton>
          {errors.language && <S.Error>{errors?.language?.message}</S.Error>}
        </S.WrapperButton>

        <S.WrapperButton>
          <S.Label>Documento primário</S.Label>
          <S.SelectButton
            onPress={handleSelectDocument}
            active={isDocumentType}
            disabled={!isDisabled}
          >
            <S.LabelSelect isSelect={documentPrimary?.label !== "Selecione"}>
              {documentPrimary?.label}
            </S.LabelSelect>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={
                documentExtra?.label !== "Selecione"
                  ? theme.colors.color_neutral_40
                  : theme.colors.color_neutral_60
              }
            />
          </S.SelectButton>
          {errors.documentType && (
            <S.Error>{errors?.documentType?.message}</S.Error>
          )}
        </S.WrapperButton>

        <InputTextEdit
          textRefMask={documentInputRef}
          control={control}
          name="document"
          property="Higher"
          label="N° do documento primário"
          placeholder="000.000.000-00"
          keyboardType="numeric"
          mask
          type="cpf"
          maxLength={18}
          editable={isDisabled}
          errorMessage={errors?.document?.message}
        />

        <S.WrapperButton>
          <S.Label>Documento extra</S.Label>
          <S.SelectButton
            onPress={handleSelectDocumentExtra}
            active={isAdditionalDocumentType}
            disabled={!isDisabled}
          >
            <S.LabelSelect isSelect={documentExtra?.label !== "Selecione"}>
              {documentExtra?.label}
            </S.LabelSelect>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={
                documentExtra?.label !== "Selecione"
                  ? theme.colors.color_neutral_40
                  : theme.colors.color_neutral_60
              }
            />
          </S.SelectButton>
          {errors.additionalDocumentType && (
            <S.Error>{errors?.additionalDocumentType?.message}</S.Error>
          )}
        </S.WrapperButton>

        <InputTextEdit
          textRef={documentExtraInputRef}
          control={control}
          name="additionalDocument"
          property="Higher"
          label="N° do documento Extra"
          placeholder="00000000000"
          maxLength={11}
          editable={isDisabled}
          keyboardType="numeric"
          errorMessage={errors?.additionalDocument?.message}
        />

        <InputTextEdit
          control={control}
          name="additionalDocumentIssueDate"
          property="Higher"
          label="Data de emissão do documento extra"
          placeholder="01/01/2020"
          keyboardType="numeric"
          mask
          type="datetime"
          options={{
            format: "DD/MM/YYYY",
          }}
          editable={isDisabled}
          iconRight={
            <Period
              fill={theme.colors.color_neutral_70}
              width={20}
              height={20}
            />
          }
          errorMessage={errors?.additionalDocumentIssueDate?.message}
        />

        <InputTextEdit
          control={control}
          name="birthDate"
          property="Higher"
          label="Data de nascimento"
          placeholder="01/01/1990"
          keyboardType="numeric"
          mask
          type="datetime"
          options={{
            format: "DD/MM/YYYY",
          }}
          editable={isDisabled}
          iconRight={
            <Period
              fill={theme.colors.color_neutral_70}
              width={20}
              height={20}
            />
          }
          errorMessage={errors?.birthDate?.message}
        />
      </S.FieldContainer>

      <UpdatePhoneNumber />

      <UpdateEmail />

      <SelectOptionModal
        title="Nacionalidade"
        options={OptionsProfile.country}
        refModal={modalSelectNationalityRef}
        onSelect={handleSelectOptionNationality}
        setIsActive={setIsNationality}
        option={_nationality}
      />
      <SelectOptionModal
        title="Idioma"
        refModal={modalSelectLanguageRef}
        options={OptionsProfile.languages}
        onSelect={handleSelectOptionLanguage}
        setIsActive={setIsLanguage}
        option={_language}
      />
      <SelectOptionModal
        title="Tipo de Documento"
        refModal={modalSelectDocumentRef}
        options={OptionsProfile.documentTypes}
        onSelect={handleSelectOptionDocumentType}
        setIsActive={setIsDocumentType}
        option={_documentType}
      />
      <SelectOptionModal
        title="Tipo de Documento Extra"
        refModal={modalSelectDocumentExtraRef}
        options={OptionsProfile.extraDocumentTypes}
        onSelect={handleSelectOptionAdditionalDocumentType}
        setIsActive={setIsAdditionalDocumentType}
        option={_additionalDocumentType}
      />
    </S.Wrapper>
  );
};
