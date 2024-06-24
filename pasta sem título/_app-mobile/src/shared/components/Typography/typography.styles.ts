import styled, { css } from "styled-components/native";
import { Text } from "react-native";
import { TTypographyProps } from "./typography.types";

export const Typography = styled(Text)<Omit<TTypographyProps, "title">>`
  text-align: ${({ align }) => align || "left"};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};

  ${({ variant, size, theme }) =>
    variant === "body" &&
    size === "small" &&
    css`
      font-size: ${theme.fonts.sizes.smallX}px;
      line-height: ${theme.fonts.sizes.large}px;
    `};

  ${({ variant, size, theme }) =>
    variant === "body" &&
    size === "medium" &&
    css`
      font-size: ${theme.fonts.sizes.medium}px;
      line-height: ${theme.fonts.sizes.large}px;
    `};

  ${({ variant, size, theme }) =>
    variant === "body" &&
    size === "large" &&
    css`
      font-size: ${theme.fonts.sizes.mediumX}px;
      line-height: ${theme.fonts.sizes.large}px;
    `};

  ${({ variant, size, theme }) =>
    variant === "body" &&
    size === "large2" &&
    css`
      font-size: ${theme.fonts.sizes.mediumX}px;
      line-height: 40px;
    `};

  ${({ variant, size, theme }) =>
    variant === "head" &&
    size === "small" &&
    css`
      font-size: ${theme.fonts.sizes.largeS}px;
      line-height: ${theme.fonts.sizes.largeXX}px;
    `};

  ${({ variant, size, theme }) =>
    variant === "head" &&
    size === "medium" &&
    css`
      font-size: ${theme.fonts.sizes.large}px;
      line-height: ${theme.fonts.sizes.largeXX}px;
    `};

  ${({ variant, size, theme }) =>
    variant === "head" &&
    size === "large" &&
    css`
      font-size: ${theme.fonts.sizes.largeXX}px;
      line-height: ${theme.fonts.sizes.largeXX}px;
    `};

  ${({ variant, size }) =>
    variant === "head" &&
    size === "large2" &&
    css`
      font-size: 52px;
      line-height: 60px;
    `};

  ${({ variant, theme, size }) =>
    variant === "subtitle" &&
    size === "small" &&
    css`
      font-size: ${theme.fonts.sizes.smallS}px;
      line-height: ${theme.fonts.sizes.medium}px;
    `};
  ${({ variant, theme, size }) =>
    variant === "subtitle" &&
    size === "medium" &&
    css`
      font-size: ${theme.fonts.sizes.small}px;
      line-height: ${theme.fonts.sizes.medium}px;
    `};
  ${({ variant, theme, size }) =>
    variant === "subtitle" &&
    size === "large" &&
    css`
      font-size: ${theme.fonts.sizes.smallX}px;
      line-height: ${theme.fonts.sizes.medium}px;
    `};

  ${({ weight, theme }) =>
    weight === "black" &&
    css`
      font-weight: 900;
      font-family: ${theme.fonts.Satoshi.variable};
    `}
  ${({ weight, theme }) =>
    weight === "bold" &&
    css`
      font-weight: 700;
      font-family: ${theme.fonts.Satoshi.bold};
    `}
  ${({ weight, theme }) =>
    weight === "medium" &&
    css`
      font-weight: 500;
      font-family: ${theme.fonts.Satoshi.medium};
    `}
  ${({ weight, theme }) =>
    weight === "regular" &&
    css`
      font-weight: 400;
      font-family: ${theme.fonts.Satoshi.regular};
    `}
  ${({ weight, theme }) =>
    weight === "light" &&
    css`
      font-weight: 300;
      font-family: ${theme.fonts.Satoshi.light};
    `}

  ${({ colorValue, theme }) =>
    colorValue === "neutral" &&
    css`
      color: ${theme.colors.gray_l900_d50};
      text-decoration-color: ${theme.colors.gray_l900_d50};
    `}
  ${({ colorValue, theme }) =>
    colorValue === "neutral-black" &&
    css`
      color: ${theme.colors.gray_l800_d100};
      text-decoration-color: ${theme.colors.gray_l800_d100};
    `}
  ${({ colorValue, theme }) =>
    colorValue === "neutral-bold" &&
    css`
      color: ${theme.colors.blue_l700_d200};
      text-decoration-color: ${theme.colors.blue_l700_d200};
    `}
  ${({ colorValue, theme }) =>
    colorValue === "neutral-medium" &&
    css`
      color: ${theme.colors.gray_l600_d300};
      text-decoration-color: ${theme.colors.gray_l600_d300};
    `}
  ${({ colorValue, theme }) =>
    colorValue === "neutral-regular" &&
    css`
      color: ${theme.colors.gray_l500_d400};
      text-decoration-color: ${theme.colors.gray_l500_d400};
    `}
  ${({ colorValue, theme }) =>
    colorValue === "neutral-light" &&
    css`
      color: ${theme.colors.gray_l400_d500};
      text-decoration-color: ${theme.colors.gray_l400_d500};
    `}
  ${({ colorValue, theme }) =>
    colorValue === "primary" &&
    css`
      color: ${theme.colors.blue_l600_d300};
      text-decoration-color: ${theme.colors.blue_l600_d300};
    `}
  ${({ colorValue, theme }) =>
    colorValue === "success" &&
    css`
      color: ${theme.colors.green_l600_d300};
      text-decoration-color: ${theme.colors.green_l600_d300};
    `}
  ${({ colorValue, theme }) =>
    colorValue === "danger" &&
    css`
      color: ${theme.colors.red_l600_d300};
      text-decoration-color: ${theme.colors.red_l600_d300};
    `}
  ${({ colorValue, theme }) =>
    colorValue === "warning" &&
    css`
      color: ${theme.colors.yellow_l600_d300};
      text-decoration-color: ${theme.colors.yellow_l600_d300};
    `}
  ${({ colorValue, theme }) =>
    colorValue === "yellow" &&
    css`
      color: ${theme.colors.yellow_l700_d200};
      text-decoration-color: ${theme.colors.yellow_l700_d200};
    `}
  ${({ colorValue, theme }) =>
    colorValue === "white" &&
    css`
      color: ${theme.color_buttons.bg_disabled};
      text-decoration-color: ${theme.color_buttons.bg_disabled};
    `}
`;
