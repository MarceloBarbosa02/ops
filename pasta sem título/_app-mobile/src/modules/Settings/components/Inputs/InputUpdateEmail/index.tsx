import React, { useCallback, useMemo, useRef, useState } from "react";
import { useTheme } from "styled-components/native";
import { ActivityIndicator } from "react-native";

import { useUpdateContact } from "@shared/store/useUpdateContact";
import { ValidateEmail } from "@shared/utils/validations";

import { useUpdateEmail } from "../../Cards/UpdateEmail/hooks/useUpdateEmail";
import * as S from "./styles";

export const InputUpdateEmail = () => {
  const theme = useTheme();
  const emailInputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const { handleSendCodeEmail, isLoadingEmail } = useUpdateEmail();
  const { emailCurrent, handleChangeEmailCurrent } = useUpdateContact(
    (store) => {
      return {
        emailCurrent: store.emailCurrent,
        handleChangeEmailCurrent: store.handleChangeEmailCurrent,
      };
    }
  );

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const validEmail = useMemo(() => {
    if (ValidateEmail(emailCurrent)) {
      return false;
    }
    return true;
  }, [emailCurrent]);

  return (
    <S.Wrapper>
      <S.TextInput
        ref={emailInputRef}
        value={emailCurrent}
        onChangeText={(text: string) => {
          handleChangeEmailCurrent(text);
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        placeholder="exemplo@email.com"
        placeholderTextColor={theme.colors.color_neutral_60}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <S.ButtonUpdateEmail
        onPress={() => handleSendCodeEmail(emailCurrent)}
        disabled={!emailCurrent || validEmail}
        isDisabled={validEmail}
      >
        {isLoadingEmail ? (
          <ActivityIndicator color={theme.colors.gray_l100_d800} />
        ) : (
          <S.TextButtonUpdateEmail>Avançar</S.TextButtonUpdateEmail>
        )}
      </S.ButtonUpdateEmail>
    </S.Wrapper>
  );
};
