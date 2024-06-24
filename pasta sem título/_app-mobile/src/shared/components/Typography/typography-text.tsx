import styled, { css } from "styled-components/native";

export interface TextProps {
  align?: string;
  color?: string;
  fontSize?: number;
  hasPadding?: boolean;
  spacing?: number;
  lineHeight?: number;
  typeWeight?: "regular" | "medium" | "bold" | "black" | "light";
  underline?: boolean;
  variant: "headline" | "body" | "subtitle";
  width?: string;
  wrap?: boolean;
}

export const TypographyTextMaster = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<TextProps>`
  ${({ variant, fontSize, lineHeight, theme }) =>
    variant === "body" &&
    css`
      font-size: ${fontSize || theme.fonts.sizes.medium}px;
      line-height: ${lineHeight || theme.fonts.sizes.large}px;
    `};
  ${({ variant, fontSize, lineHeight, theme }) =>
    variant === "headline" &&
    css`
      font-size: ${fontSize || theme.fonts.sizes.large}px;
      line-height: ${lineHeight || theme.fonts.sizes.largeXX}px;
    `};
  ${({ variant, fontSize, lineHeight, theme }) =>
    variant === "subtitle" &&
    css`
      font-size: ${fontSize || theme.fonts.sizes.smallS}px;
      line-height: ${lineHeight || theme.fonts.sizes.medium}px;
    `};

  font-size: ${({ fontSize = 16 }) => fontSize}px;
  color: ${({ color, theme }) => color || theme.colors?.gray_l500_d400};
  margin: ${({ spacing }) => spacing || 0}px;
  padding: ${({ hasPadding }) => (hasPadding ? "8px" : "0px")};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  text-decoration-color: ${({ color, theme }) =>
    color || theme.colors?.color_neutral_60};
  text-align: ${({ align }) => align || "left"};
  width: ${({ width }) => (width ? width : "auto")};

  ${({ typeWeight, theme }) =>
    typeWeight === "black" &&
    css`
      font-weight: 900;
      font-family: ${theme.fonts.Satoshi.variable};
    `}

  ${({ typeWeight, theme }) =>
    typeWeight === "bold" &&
    css`
      font-weight: 700;
      font-family: ${theme.fonts.Satoshi.bold};
    `}

  ${({ typeWeight, theme }) =>
    typeWeight === "medium" &&
    css`
      font-weight: 500;
      font-family: ${theme.fonts.Satoshi.medium};
    `}

  ${({ typeWeight, theme }) =>
    typeWeight === "regular" &&
    css`
      font-weight: 400;
      font-family: ${theme.fonts.Satoshi.regular};
    `}

  ${({ typeWeight, theme }) =>
    typeWeight === "light" &&
    css`
      font-weight: 300;
      font-family: ${theme.fonts.Satoshi.light};
    `}
`;
