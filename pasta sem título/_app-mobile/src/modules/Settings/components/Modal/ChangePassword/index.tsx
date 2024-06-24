import React, { RefObject, useEffect, useRef } from "react";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";
import { useTheme } from "styled-components/native";
import { TextInput } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  IFormUpdatePassword,
  UpdatePasswordSchema,
} from "@shared/types/validations";
import { useUpdatePassword } from "@modules/Settings/hooks/useProfile";
import { showToast } from "@shared/store/useToastStore";

import { InputTextEdit } from "../../Inputs/InputText";
import { ConfirmationArea } from "../../Cards";
import * as S from "./styles";

interface SelectOptionProps {
  refModal: RefObject<Modalize>;
  isNewPassword: boolean;
  setIsNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChangePasswordModal = ({
  refModal,
  isNewPassword,
  setIsNewPassword,
}: SelectOptionProps) => {
  const theme = useTheme();
  const modalCurrentPasswordRef = useRef<TextInput>(null);
  const { mutate, isLoading } = useUpdatePassword();
  const {
    control,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { isValid, errors },
  } = useForm<IFormUpdatePassword>({
    resolver: zodResolver(UpdatePasswordSchema),
    mode: "onChange",
  });

  const handleClosed = () => {
    refModal.current?.close();
  };

  useEffect(() => {
    if (isNewPassword) {
      setTimeout(() => {
        setValue("currentPassword", "");
        setValue("newPassword", "");
        setValue("newPasswordConfirmation", "");
        clearErrors();
        modalCurrentPasswordRef.current?.focus();
      }, 100);
    }
  }, [isNewPassword]);

  const handleChangePassword = (data: IFormUpdatePassword) => {
    mutate(data, {
      onSuccess: () => {
        refModal.current?.close();
        showToast({
          type: "success",
          message: "Senha atualizada com sucesso!.",
        });
      },
      onError: (error: any) => {
        showToast({
          type: "error",
          message: error.response?.data.message || "Ops! Algo deu errado.",
        });
      },
    });
  };

  return (
    <Portal>
      <Modalize
        ref={refModal}
        adjustToContentHeight
        modalStyle={{
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          backgroundColor: theme.colors.color_neutral_0,
        }}
        onClosed={() => setIsNewPassword(false)}
      >
        <S.Wrapper>
          <S.Title>Alterar Senha</S.Title>
          <S.WrapperInputs>
            <S.Input>
              <InputTextEdit
                textRef={modalCurrentPasswordRef}
                label="Senha atual"
                name="currentPassword"
                property="Higher"
                control={control}
                maxLength={20}
                secureTextEntry
                errorMessage={errors.currentPassword?.message}
              />
            </S.Input>
            <S.Input>
              <InputTextEdit
                label="Nova senha"
                name="newPassword"
                control={control}
                property="Higher"
                maxLength={20}
                secureTextEntry
                errorMessage={errors.newPassword?.message}
              />
            </S.Input>
            <S.Input>
              <InputTextEdit
                label="Confirmar nova senha"
                name="newPasswordConfirmation"
                control={control}
                property="Higher"
                maxLength={20}
                secureTextEntry
                errorMessage={errors.newPasswordConfirmation?.message}
              />
            </S.Input>
          </S.WrapperInputs>
          <ConfirmationArea
            titleSave="Redefinir senha"
            onPress={handleSubmit(handleChangePassword)}
            handleNavigateBack={handleClosed}
            disabled={!isValid}
            isLoading={isLoading}
            color={theme.colors.color_blue_40}
          />
        </S.Wrapper>
      </Modalize>
    </Portal>
  );
};
