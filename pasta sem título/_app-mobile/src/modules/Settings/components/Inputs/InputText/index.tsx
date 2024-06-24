import React, { ReactNode, Ref, useCallback, useMemo, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { ActivityIndicator, TextInput, TextInputProps } from "react-native";
import {
  TextInputMaskMethods,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from "react-native-masked-text";

import * as S from "./styles";
import { Feather } from "@expo/vector-icons";

interface InputTextProps extends TextInputProps {
  label?: string;
  description?: string;
  control: Control<any>;
  name: string;
  iconName?: string;
  icon?: string;
  textRef?: Ref<TextInput>;
  textRefMask?: Ref<TextInputMaskMethods>;
  options?: TextInputMaskOptionProp;
  type?: string;
  errorMessage?: string;
  mask?: boolean;
  isLoading?: boolean;
  iconRight?: ReactNode;
  isError?: ReactNode;
  typeIcon?: "-" | "left" | "right" | "center";
  property?: "Filled" | "Outline" | "Higher" | "-";
}

export const InputTextEdit = ({
  label,
  description,
  control,
  name,
  textRef,
  iconName,
  icon,
  mask = false,
  isError = false,
  typeIcon = "left",
  property = "-",
  errorMessage,
  textRefMask,
  options,
  type,
  isLoading = false,
  iconRight,
  ...rest
}: InputTextProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused]);

  const handleInputBlur = useCallback((value: string) => {
    setIsFocused(false);
  }, []);

  const handlePasswordVisibilityChange = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const isColor = useMemo(() => {
    return isFocused
      ? theme.colors.color_blue_40
      : theme.colors.color_neutral_40;
  }, [isFocused, theme]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <S.Container property={property} isFocused={isFocused}>
          <S.Label property={property} isErrored={!!errorMessage}>
            {label}
          </S.Label>
          <S.WrapperInput isFocused={isFocused} isErrored={!!errorMessage}>
            {!mask && (
              <S.Input
                {...rest}
                ref={textRef}
                autoCorrect={false}
                value={value}
                onFocus={handleInputFocus}
                onBlur={() => handleInputBlur(value)}
                maxFontSizeMultiplier={1.1}
                onChangeText={onChange}
                textContentType={"oneTimeCode"}
                placeholderTextColor={theme.colors.color_neutral_60}
                secureTextEntry={
                  rest.secureTextEntry ? isPasswordVisible : false
                }
              />
            )}
            {mask && (
              <S.MaskTextInput
                {...rest}
                autoCorrect={false}
                maxFontSizeMultiplier={1.1}
                ref={textRefMask}
                isEditable={!rest.editable}
                onFocus={handleInputFocus}
                onBlur={() => handleInputBlur(value)}
                type={type as TextInputMaskTypeProp}
                options={options as TextInputMaskOptionProp}
                placeholderTextColor={theme.colors.color_neutral_60}
                value={value}
                onChangeText={onChange}
                autoCapitalize="none"
                secureTextEntry={
                  rest.secureTextEntry === true ? isPasswordVisible : false
                }
              />
            )}
            {rest.secureTextEntry ? (
              <S.IconContainer>
                <S.BtnIcon onPress={handlePasswordVisibilityChange}>
                  {isPasswordVisible ? (
                    <Feather name="eye-off" size={18} color={isColor} />
                  ) : (
                    <Feather name="eye" size={18} color={isColor} />
                  )}
                </S.BtnIcon>
              </S.IconContainer>
            ) : null}
            {isLoading && <ActivityIndicator />}
            {iconRight && <S.IconContainer>{iconRight}</S.IconContainer>}
          </S.WrapperInput>
          {errorMessage && <S.Error>{errorMessage}</S.Error>}
        </S.Container>
      )}
    />
  );
};
