import React, { Ref, useCallback, useMemo, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { Keyboard, TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

interface InputTextProps extends TextInputProps {
  label?: string;
  description?: string;
  control: Control<any>;
  name: string;
  iconName?: string;
  icon?: string;
  textRef?: Ref<TextInput>;
  type?: string;
  typeIcon?: "-" | "left" | "right" | "center";
  property?: "Filled" | "Outline" | "Higher" | "-";
}

export const InputSignInMaster = ({
  label,
  description,
  control,
  name,
  textRef,
  iconName,
  icon,
  typeIcon = "left",
  property = "-",
  type,
  ...rest
}: InputTextProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const theme = useTheme();

  const handlePasswordVisibilityChange = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused]);

  const handleInputBlur = useCallback((value: string) => {
    setIsFocused(false);
    Keyboard.dismiss;
    setIsFilled(!!value);
  }, []);

  const isColor = useMemo(() => {
    return isFocused || isFilled
      ? theme.colors.color_blue_40
      : theme.colors.color_neutral_40;
  }, [isFocused, isFilled, theme]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <S.Wrapper isFocused={isFocused} isErrored={!!error}>
          <S.Container
            style={{
              borderColor: isColor,
            }}
            property={property}
            isFocused={isFocused}
          >
            {(property === "Higher" || property === "Outline") && (
              <S.Label property={property} isErrored={!!error}>
                {label}
              </S.Label>
            )}
            <S.WrapperInput>
              {((isFocused && property === "Filled") ||
                (value && property === "Filled")) && (
                <S.Label property={property} isErrored={!!error}>
                  {label}
                </S.Label>
              )}
              <View style={{ flexDirection: "row" }}>
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
                  placeholderTextColor={theme.colors.color_neutral_70}
                  autoCapitalize={rest.autoCapitalize ?? "none"}
                  secureTextEntry={
                    rest.secureTextEntry ? isPasswordVisible : false
                  }
                />
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
              </View>
            </S.WrapperInput>
          </S.Container>
          {description && <S.Descrition>{description}</S.Descrition>}
        </S.Wrapper>
      )}
    />
  );
};
