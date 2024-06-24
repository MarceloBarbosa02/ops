import React, { ReactNode, Ref, useCallback, useMemo, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { useTheme } from "styled-components/native";
import {
  ActivityIndicator,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

import * as S from "./styles";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  TextInputMaskMethods,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from "react-native-masked-text";

interface InputTextProps extends TextInputProps {
  label?: string;
  description?: string;
  control: Control<any>;
  name: string;
  iconName?: string;
  icon?: string;
  isLoading?: boolean;
  textRef?: Ref<TextInput>;
  textRefMask?: Ref<TextInputMaskMethods>;
  options?: TextInputMaskOptionProp;
  type?: string;
  errorMessage?: string;
  mask?: boolean;
  iconRight?: ReactNode;
  typeIcon?: "-" | "left" | "right" | "center";
  property?: "Filled" | "Outline" | "Higher" | "-";
}

export const InputTextMaster = ({
  label,
  description,
  control,
  name,
  textRef,
  iconName,
  icon,
  isLoading = false,
  textRefMask,
  errorMessage,
  typeIcon = "left",
  property = "-",
  iconRight,
  mask = false,
  options,
  type,
  ...rest
}: InputTextProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  const handlePasswordVisibilityChange = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused]);

  const handleInputBlur = useCallback((value: string) => {
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
          <S.Container
            style={{
              borderColor: isColor,
            }}
            property={property}
            isFocused={isFocused}
            isErrored={!!error}
          >
            {(property === "Higher" || property === "Outline") && (
              <S.Label property={property}>{label}</S.Label>
            )}
            {!!iconName && (
              <MaterialCommunityIcons
                name={iconName}
                size={RFPercentage(2)}
                color={isColor}
              />
            )}
            {!!icon && (
              <Feather name={icon} size={RFPercentage(3)} color={isColor} />
            )}
            <S.WrapperInput>
              {((isFocused && property === "Filled") ||
                (value && property === "Filled")) && (
                <S.Label property={property}>{label}</S.Label>
              )}
              <View style={{ flexDirection: "row" }}>
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
                    placeholderTextColor={theme.colors.color_neutral_40}
                    autoCapitalize={rest.autoCapitalize ?? "none"}
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
                    onFocus={handleInputFocus}
                    onBlur={() => handleInputBlur(value)}
                    type={type as TextInputMaskTypeProp}
                    options={options as TextInputMaskOptionProp}
                    placeholderTextColor={theme.colors.color_neutral_40}
                    error={error && error?.message ? true : false}
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
                        <Feather name="eye-off" size={16} color={isColor} />
                      ) : (
                        <Feather name="eye" size={16} color={isColor} />
                      )}
                    </S.BtnIcon>
                  </S.IconContainer>
                ) : null}

                {isLoading && <ActivityIndicator size={"small"} />}
              </View>
            </S.WrapperInput>
          </S.Container>
          {error?.message && <S.Error>{error?.message}</S.Error>}
        </S.Wrapper>
      )}
    />
  );
};
