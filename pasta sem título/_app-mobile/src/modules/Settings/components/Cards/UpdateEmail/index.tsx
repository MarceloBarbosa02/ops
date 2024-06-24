import React, { useEffect, useMemo } from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { useUpdateContact } from "@shared/store/useUpdateContact";

import { ValidationCode } from "../../Items/ValidationCode";
import { WaitingConfirmation } from "../WaitingConfirmation";
import { useUpdateEmail } from "./hooks/useUpdateEmail";
import { InputUpdateEmail } from "../../Inputs/InputUpdateEmail";
import * as S from "./styles";

export function UpdateEmail() {
  const theme = useTheme();
  const { data: userData, refetch } = useFetchMe();
  const {
    isOpen,
    isValidation,
    emailCurrent,
    handleChangeIsOpen,
    handleChangeEmailCurrent,
    handleChangeIsValidation,
  } = useUpdateContact((store) => {
    return {
      isOpen: store.isOpenEmail,
      isValidation: store.isValidationEmail,
      emailCurrent: store.emailCurrent,
      handleChangeIsOpen: store.handleChangeIsOpenEmail,
      handleChangeEmailCurrent: store.handleChangeEmailCurrent,
      handleChangeIsValidation: store.handleChangeIsValidationEmail,
    };
  });
  const { codeIsValid } = useUpdateEmail();

  useEffect(() => {
    refetch();
    handleChangeIsOpen(false);
    handleChangeIsValidation(false);
  }, []);

  const handleUpdateBack = () => {
    handleChangeIsOpen(false);
    handleChangeIsValidation(false);
    handleChangeEmailCurrent(userData?.email ?? "");
  };

  const handleCleanInput = () => {
    handleChangeIsOpen(true);
    handleChangeEmailCurrent("");
  };

  const updateStatus = useMemo(() => {
    return userData?.requestUpdateContact?.find(
      (obj: any) => obj.type === "EMAIL"
    );
  }, [userData]);

  const isValidationUpdate = useMemo(() => {
    return !isOpen && !updateStatus;
  }, [isOpen, updateStatus]);

  const emailFormat = useMemo(() => {
    const first = emailCurrent?.substring(0, 5);
    const second = emailCurrent?.split("@")[1];
    return `${first}****@${second}`;
  }, [emailCurrent]);

  return (
    <S.Container>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <S.Content widthSize={isOpen || !isValidationUpdate ? 100 : 80}>
          {updateStatus ? (
            <WaitingConfirmation type="EMAIL" oldEmail={userData?.email} />
          ) : (
            <>
              {!codeIsValid && (
                <>
                  <S.WrapperHeader>
                    <S.Label>{isOpen ? "Atualizar e-mail" : "E-mail"}</S.Label>
                    {isOpen && (
                      <S.BtnClose onPress={handleUpdateBack}>
                        <AntDesign
                          name="close"
                          size={20}
                          color={theme.colors.color_neutral_100}
                        />
                      </S.BtnClose>
                    )}
                  </S.WrapperHeader>
                  <S.ContactText>
                    {isOpen &&
                      !isValidation &&
                      "Insira seu novo endereço de e-mail para validação. Enviaremos uma mensagem com um código para confirmar a alteração"}

                    {!isOpen &&
                      !isValidation &&
                      `Atual: ${
                        emailCurrent
                          ? emailCurrent.length > 26
                            ? emailFormat
                            : emailCurrent
                          : "Não informado"
                      }`}
                  </S.ContactText>

                  {isOpen && !isValidation && <InputUpdateEmail />}
                  {isValidation && <ValidationCode type="EMAIL" />}
                </>
              )}
            </>
          )}
        </S.Content>

        {isValidationUpdate && (
          <S.ContactButton onPress={handleCleanInput}>
            {<S.ContactButtonText>Atualizar</S.ContactButtonText>}
          </S.ContactButton>
        )}
      </View>
    </S.Container>
  );
}
