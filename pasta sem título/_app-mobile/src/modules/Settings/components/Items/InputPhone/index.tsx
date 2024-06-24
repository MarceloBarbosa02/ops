import React, { useCallback, useMemo, useState } from "react";
import { useTheme } from "styled-components";
import { TextInputMask } from "react-native-masked-text";

import { useCurrentUserStore } from "@shared/store";
import { useUpdateContact } from "@shared/store/useUpdateContact";

import { Dropdown } from "../Dropdown";
import * as S from "./styles";

interface InputTextProps {
  errorMessage?: string;
}

export const InputNumberPhone = ({ errorMessage }: InputTextProps) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const { selectedDDI } = useCurrentUserStore((store) => {
    return {
      selectedDDI: store.selectedDDI,
    };
  });
  const { phoneNumber, handleChangePhoneNumber } = useUpdateContact((store) => {
    return {
      phoneNumber: store.phoneNumber,
      handleChangePhoneNumber: store.handleChangePhoneNumber,
    };
  });

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const isColor = useMemo(() => {
    return isFocused
      ? theme.colors.color_blue_40
      : !!errorMessage
      ? theme.colors.color_red_40
      : theme.colors.color_neutral_40;
  }, [isFocused, theme, errorMessage]);

  return (
    <S.Wrapper>
      <S.WrapperInput
        style={{
          borderColor: isColor,
        }}
      >
        <Dropdown />
        <TextInputMask
          type="custom"
          autoCorrect={false}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          maxFontSizeMultiplier={1.1}
          value={phoneNumber}
          onChangeText={(text) => handleChangePhoneNumber(text)}
          placeholderTextColor={theme.colors.color_neutral_70}
          autoCapitalize={"none"}
          keyboardType="number-pad"
          maxLength={15}
          options={{
            mask: selectedDDI?.mask ? selectedDDI?.mask : "999 999 999 999",
          }}
          style={{ flex: 1, color: theme.colors.gray_l600_d300 }}
        />
      </S.WrapperInput>
      {errorMessage && <S.Error>{errorMessage}</S.Error>}
    </S.Wrapper>
  );
};
