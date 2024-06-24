import React, { useCallback, useMemo, useState } from "react";
import { useTheme } from "styled-components/native";

import { useSalesStore } from "@shared/store/useSalesStore";
import { ValidateEmail } from "@shared/utils";

import * as S from "./styles";

export const InputEmailAffiliate = () => {
  const theme = useTheme();
  const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const { params, handleSetEmailAffiliateFilter, handleDisabledFocusedButton } =
    useSalesStore((store) => {
      return {
        params: store.params,
        handleSetEmailAffiliateFilter: store.handleSetEmailAffiliateFilter,
        handleDisabledFocusedButton: store.handleDisabledFocusedButton,
      };
    });

  const handleInputFocus = useCallback(() => {
    handleDisabledFocusedButton();
    setIsFocused(true);
  }, [isFocused]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleValidateEmail = (email: string) => {
    if (ValidateEmail(email)) {
      setIsErrorEmail(false);
      handleSetEmailAffiliateFilter(email);
    }
    if (!ValidateEmail(email)) {
      if (email === "") {
        setIsErrorEmail(false);
        handleSetEmailAffiliateFilter("");
      } else {
        handleSetEmailAffiliateFilter(email);
        setIsErrorEmail(true);
      }
    }
  };

  const isColor = useMemo(() => {
    return isFocused
      ? theme.colors.color_blue_40
      : !!isErrorEmail
      ? theme.colors.color_red_40
      : theme.colors.color_neutral_20;
  }, [isFocused, theme, isErrorEmail]);

  return (
    <S.Wrapper>
      <S.LabelEmail>E-mail do afiliado</S.LabelEmail>
      <S.WrapperInputEmail color={isColor}>
        <S.InputEmail
          value={params.emailAffiliate}
          onChangeText={handleValidateEmail}
          keyboardType="email-address"
          placeholder="Insira o e-mail"
          placeholderTextColor={theme.colors.color_neutral_40}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </S.WrapperInputEmail>
      {isErrorEmail && <S.Error>E-mail inválido</S.Error>}
    </S.Wrapper>
  );
};
