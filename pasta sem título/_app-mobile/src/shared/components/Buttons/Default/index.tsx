import React, { ReactNode, useMemo } from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

interface DefaultProps extends TouchableOpacityProps {
  title: string;
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "outlined"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "link"
    | "link-stroke";
  fontSize?: "small" | "medium" | "large" | "largeX";
  icon?: ReactNode;
  isLoading?: boolean;
  typeIcon?: "-" | "left" | "right" | "center";
  status?: "Default" | "Hover" | "Pressed" | "Focused" | "Disabled";
  sizeWidth?: number;
}

export const ButtonDefault = ({
  title,
  icon,
  variant,
  fontSize,
  typeIcon = "-",
  status,
  sizeWidth = 100,
  isLoading,
  ...rest
}: DefaultProps) => {
  const theme = useTheme();

  const colors = useMemo(
    () => ({
      text_colors: {
        primary: "#fdfdfd",
        secondary: theme.colors.color_neutral_0,
        tertiary: theme.colors.color_neutral_100,
        outlined: theme.colors.color_blue_50,
        danger: "#fdfdfd",
        success: "#fdfdfd",
        warning: "#fdfdfd",
        info: "#fdfdfd",
        link: theme.colors.color_blue_50,
        "link-stroke": theme.colors.color_neutral_80,
      },
      bg_colors: {
        primary: rest.disabled
          ? theme.colors.color_neutral_30
          : theme.colors.color_blue_60,
        secondary: rest.disabled
          ? theme.colors.color_neutral_30
          : theme.colors.color_neutral_90,
        tertiary: rest.disabled
          ? theme.colors.color_neutral_30
          : theme.colors.color_neutral_10,
        outlined: theme.colors.color_blue_50,
        danger: rest.disabled
          ? theme.colors.color_neutral_30
          : theme.colors.color_red_40,
        success: rest.disabled
          ? theme.colors.color_neutral_30
          : theme.colors.color_green_40,
        warning: rest.disabled
          ? theme.colors.color_neutral_30
          : theme.colors.color_yellow_40,
        info: rest.disabled
          ? theme.colors.color_neutral_30
          : theme.colors.color_blue_40,
        link: theme.colors.color_neutral_0,
        "link-stroke": theme.colors.color_neutral_0,
      },
    }),
    [theme, rest.disabled]
  );

  const _icon = useMemo(() => {
    if (typeIcon === "-") {
      return (
        <S.Title
          typeFont={fontSize}
          isDisabled={rest.disabled}
          style={{ color: colors.text_colors[variant] }}
        >
          {title}
        </S.Title>
      );
    }
    if (typeIcon === "center") {
      return <S.Icon isDisabled={rest.disabled}>{icon}</S.Icon>;
    }
    if (typeIcon === "left") {
      return (
        <>
          <S.Icon isDisabled={rest.disabled}>{icon}</S.Icon>
          <S.Title
            typeFont={fontSize}
            isDisabled={rest.disabled}
            style={{ color: colors.text_colors[variant] }}
          >
            {title}
          </S.Title>
        </>
      );
    }
    if (typeIcon === "right") {
      return (
        <>
          <S.Title
            typeFont={fontSize}
            isDisabled={rest.disabled}
            style={{ color: colors.text_colors[variant] }}
          >
            {title}
          </S.Title>
          <S.Icon isDisabled={rest.disabled}>{icon}</S.Icon>
        </>
      );
    }
  }, [typeIcon, variant, fontSize]);

  return (
    <S.Wrapper
      typeFont={fontSize}
      activeOpacity={0.7}
      isDisabled={rest.disabled}
      isLoading={isLoading}
      sizeWidth={sizeWidth}
      style={{
        backgroundColor: colors.bg_colors[variant],
        borderColor: colors.bg_colors[variant],
      }}
      {...rest}
    >
      {isLoading ? (
        <S.ContainerGif>
          <ActivityIndicator
            size={"small"}
            color={theme.colors.color_neutral_0}
          />
        </S.ContainerGif>
      ) : (
        _icon
      )}
    </S.Wrapper>
  );
};
