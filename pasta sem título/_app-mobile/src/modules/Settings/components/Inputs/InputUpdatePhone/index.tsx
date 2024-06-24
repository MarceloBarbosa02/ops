import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { cleanMask } from "masks-br";

import { useUpdateContact } from "@shared/store/useUpdateContact";

import { InputNumberPhone } from "../../Items/InputPhone";
import { useUpdatePhone } from "../../Cards/UpdatePhoneNumber/hook/useUpdatePhone";
import * as S from "./styles";

export const InputUpdatePhone = () => {
  const theme = useTheme();
  const { handleSendCode, isLoading } = useUpdatePhone();
  const { phoneNumber } = useUpdateContact((store) => {
    return {
      phoneNumber: store.phoneNumber,
    };
  });

  return (
    <S.Wrapper>
      <InputNumberPhone />

      <S.ButtonUpdatePhoneNumber
        onPress={() => handleSendCode(phoneNumber)}
        disabled={cleanMask(phoneNumber || "")?.length < 11}
      >
        {isLoading ? (
          <ActivityIndicator color={theme.colors.gray_l100_d800} />
        ) : (
          <S.TextButtonUpdatePhoneNumber>Avançar</S.TextButtonUpdatePhoneNumber>
        )}
      </S.ButtonUpdatePhoneNumber>
    </S.Wrapper>
  );
};
