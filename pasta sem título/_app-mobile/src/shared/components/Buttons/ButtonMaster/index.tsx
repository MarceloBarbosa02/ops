import React, { ReactNode, useMemo } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

interface ButtonMasterProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  sizeWidth?: number;
  colorLoading?: string;
  size?: "small" | "medium" | "large";
  type?: "solid" | "outlined" | "link";
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "success"
    | "warning";
  icon?: ReactNode;
  positionIcon?: "-" | "left" | "right" | "center";
}

export const ButtonMaster = ({
  icon,
  title,
  colorLoading,
  type = "solid",
  size = "medium",
  sizeWidth = 100,
  isLoading = false,
  positionIcon = "-",
  variant = "primary",
  ...rest
}: ButtonMasterProps) => {
  const theme = useTheme();

  const disabled_color_bg = useMemo(() => {
    return rest.disabled ? theme.color_buttons.bg_disabled : "";
  }, [rest.disabled]);

  const disabled_color_text = useMemo(() => {
    return rest.disabled ? theme.color_buttons.disabled_text : "";
  }, [rest.disabled]);

  return (
    <S.Wrapper
      size={size}
      type={type}
      variant={variant}
      activeOpacity={0.7}
      sizeWidth={sizeWidth}
      color={disabled_color_bg}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={colorLoading ?? theme.color_buttons.bg_outlined}
        />
      ) : (
        <>
          {positionIcon === "-" && (
            <S.Title
              size={size}
              type={type}
              variant={variant}
              sizeWidth={sizeWidth}
              color={disabled_color_text}
            >
              {title}
            </S.Title>
          )}
          {positionIcon === "center" && (
            <S.Icon isDisabled={rest.disabled}>{icon}</S.Icon>
          )}
          {positionIcon === "right" && (
            <>
              <S.Title
                size={size}
                type={type}
                variant={variant}
                sizeWidth={sizeWidth}
                color={disabled_color_text}
              >
                {title}
              </S.Title>
              <S.Icon isDisabled={rest.disabled}>{icon}</S.Icon>
            </>
          )}
          {positionIcon === "left" && (
            <>
              <S.Icon isDisabled={rest.disabled}>{icon}</S.Icon>
              <S.Title
                size={size}
                type={type}
                variant={variant}
                sizeWidth={sizeWidth}
                color={disabled_color_text}
              >
                {title}
              </S.Title>
            </>
          )}
        </>
      )}
    </S.Wrapper>
  );
};

export const style = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
