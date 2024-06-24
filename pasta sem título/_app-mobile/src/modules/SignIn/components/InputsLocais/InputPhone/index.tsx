import React, { Ref, useCallback, useMemo, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import {
  TextInputMask,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from "react-native-masked-text";

import { ItemDDI } from "@modules/SignIn/models/phone";
import { formatPhone } from "@shared/utils/formatters";

import { Dropdown } from "../../Dropdown";
import * as S from "./styles";

interface InputTextProps extends TextInputProps {
  label: string;
  control: Control<any>;
  name: string;
  maskCustom: string;
  setValue: any;
  errorMessage?: string;
  textRef?: Ref<TextInputMask>;
  type?: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp;
  handleSelectDDI(item: ItemDDI): void;
}

export const InputPhone = ({
  label,
  control,
  name,
  setValue,
  textRef,
  options,
  maskCustom,
  errorMessage,
  type,
  handleSelectDDI,
  ...rest
}: InputTextProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

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
      : theme.colors.color_neutral_30;
  }, [isFocused, theme, errorMessage]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <S.Wrapper>
          <S.WrapperInput
            style={{
              borderColor: isColor,
            }}
          >
            <Dropdown />
            <S.Input
              {...rest}
              ref={textRef}
              type="custom"
              options={{
                mask: maskCustom,
              }}
              autoCorrect={false}
              value={value}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              maxFontSizeMultiplier={1.3}
              onChangeText={(text) => onChange(formatPhone(text))}
              placeholderTextColor={theme.colors.color_neutral_70}
              autoCapitalize={rest.autoCapitalize ?? "none"}
            />
          </S.WrapperInput>
          {errorMessage && <S.Error>{errorMessage}</S.Error>}
        </S.Wrapper>
      )}
    />
  );
};
