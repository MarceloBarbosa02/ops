import styled from "styled-components/native";

interface TextProps {
  bold?: boolean;
  color?: string;
  size?: number;
  spacing?: string;
  hasPadding?: boolean;
  align?: string;
  wrap?: boolean;
  width?: string;
  family?: "light" | "medium" | "regular" | "bold";
}

export const TextLabel = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<TextProps>`
  font-size: ${({ size = 16 }) => size}px;
  font-weight: ${({ bold }) => (bold ? 700 : 300)};
  font-family: ${({ family = "regular", theme }) =>
    theme.fonts.Satoshi[family]};
  color: ${({ color }) => color};
  margin: ${({ size }) => size || 0}px;
  padding: ${({ hasPadding }) => (hasPadding ? 16 : 0)}px;
  text-align: ${({ align }) => align || "left"};
  width: ${({ width }) => (width ? width : "auto")};
  ${({ wrap }) => wrap && "flex-wrap: wrap"};
`;
