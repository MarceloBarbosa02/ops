import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

interface IConfirmationArea extends TouchableOpacityProps {
  titleSave: string;
  nameIcon?: string;
  color?: string;
  isLoading?: boolean;
  handleNavigateBack(): void;
}

export const ConfirmationArea = ({
  titleSave = "Salvar Dados",
  nameIcon,
  color = "#23CC67",
  isLoading = false,
  handleNavigateBack,
  ...rest
}: IConfirmationArea) => {
  return (
    <S.ConfirmationArea>
      <S.ContentConfirmationArea>
        <S.CancelButton onPress={handleNavigateBack}>
          <S.TextButtonCancel>Cancelar</S.TextButtonCancel>
        </S.CancelButton>

        <S.SaveButton {...rest} color={color} activeOpacity={0.8}>
          {isLoading ? (
            <S.WrapperLoading>
              <ActivityIndicator color="#FDFDFD" />
            </S.WrapperLoading>
          ) : (
            <>
              <Feather name={nameIcon} size={18} color="#FDFDFD" />
              <S.TextButtonSave>{titleSave}</S.TextButtonSave>
            </>
          )}
        </S.SaveButton>
      </S.ContentConfirmationArea>
    </S.ConfirmationArea>
  );
};
