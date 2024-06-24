import styled, { css } from "styled-components/native";
import { TouchableOpacity, Platform } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

interface Props {
  sizeWidth: number;
  size: "small" | "medium" | "large";
  isDisabled?: boolean;
  type?: "solid" | "outlined" | "link";
  color?: string;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "success"
    | "warning";
}

interface LoadingProps extends Props {
  sizeLoading: "small" | "medium" | "large";
}

export const Wrapper = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  gap: 8px;
  width: ${({ sizeWidth }) => sizeWidth}%;

  ${({ size }) =>
    size === "small" &&
    css`
      height: 40px;
      padding: ${Platform.OS === "ios" ? 8 : 6}px 16px;
    `};

  ${({ size }) =>
    size === "medium" &&
    css`
      height: 48px;
      padding: ${Platform.OS === "ios" ? 12 : 10}px 16px;
    `};

  ${({ size }) =>
    size === "large" &&
    css`
      height: 56px;
      padding: ${Platform.OS === "ios" ? 16 : 12}px 16px;
    `};

  ${({ type }) =>
    type === "link" &&
    css`
      background-color: transparent;
    `};

  ${({ type, variant, theme, color }) =>
    type === "outlined" &&
    variant === "primary" &&
    css`
      border: 2px;
      background-color: transparent;
      border-color: ${color ? color : theme.color_buttons.primary_default};
    `};

  ${({ type, variant, theme, color }) =>
    type === "outlined" &&
    variant === "success" &&
    css`
      border: 2px;
      background-color: transparent;
      border-color: ${color ? color : theme.color_buttons.success_default};
    `};

  ${({ type, variant, theme, color }) =>
    type === "outlined" &&
    variant === "danger" &&
    css`
      border: 2px;
      background-color: transparent;
      border-color: ${color ? color : theme.color_buttons.danger_default};
    `};

  ${({ type, variant, theme, color }) =>
    type === "solid" &&
    variant === "primary" &&
    css`
      background-color: ${color ? color : theme.color_buttons.primary_default};
      border-color: ${color ? color : theme.color_buttons.primary_default};
    `};

  ${({ type, variant, theme, color }) =>
    type === "solid" &&
    variant === "danger" &&
    css`
      background-color: ${color ? color : theme.color_buttons.danger_default};
      border-color: ${color ? color : theme.color_buttons.danger_default};
    `};

  ${({ type, variant, theme, color }) =>
    type === "solid" &&
    variant === "secondary" &&
    css`
      background-color: ${color
        ? color
        : theme.color_buttons.secondary_default};
      border-color: ${color ? color : theme.color_buttons.secondary_default};
    `};

  ${({ type, variant, theme, color }) =>
    type === "solid" &&
    variant === "success" &&
    css`
      background-color: ${color ? color : theme.color_buttons.success_default};
      border-color: ${color ? color : theme.color_buttons.success_default};
    `};

  ${({ type, variant, theme, color }) =>
    type === "solid" &&
    variant === "tertiary" &&
    css`
      background-color: ${color ? color : theme.color_buttons.tertiary_default};
      border-color: ${color ? color : theme.color_buttons.tertiary_default};
    `};

  ${({ type, variant, theme, color }) =>
    type === "solid" &&
    variant === "warning" &&
    css`
      background-color: ${color ? color : theme.color_buttons.warning_default};
      border-color: ${color ? color : theme.color_buttons.warning_default};
    `};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<Props>`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};

  ${({ size, theme }) =>
    size === "small" &&
    css`
      font-size: ${theme.fonts.sizes.smallX}px;
    `};

  ${({ size, theme }) =>
    size === "medium" &&
    css`
      font-size: ${theme.fonts.sizes.medium}px;
    `};

  ${({ size, theme }) =>
    size === "large" &&
    css`
      font-size: ${theme.fonts.sizes.large}px;
    `};

  ${({ type, variant, theme, color }) =>
    type === "solid" &&
    variant === "danger" &&
    css`
      color: ${color ? color : theme.color_buttons.primary_text_solid};
    `};

  ${({ type, variant, theme, color }) =>
    type === "solid" &&
    variant === "primary" &&
    css`
      color: ${color ? color : theme.color_buttons.primary_text_solid};
    `};

  ${({ type, variant, theme, color }) =>
    type === "solid" &&
    variant === "secondary" &&
    css`
      color: ${color ? color : theme.color_buttons.primary_text_solid};
    `};

  ${({ type, variant, theme, color }) =>
    type === "solid" &&
    variant === "success" &&
    css`
      color: ${color ? color : theme.color_buttons.primary_text_solid};
    `};

  ${({ type, variant, theme, color }) =>
    type === "solid" &&
    variant === "tertiary" &&
    css`
      color: ${color ? color : theme.color_buttons.secondary_text_solid};
    `};

  ${({ type, variant, theme, color }) =>
    type === "solid" &&
    variant === "warning" &&
    css`
      color: ${color ? color : theme.color_buttons.secondary_text_solid};
    `};

  ${({ type, variant, theme, color }) =>
    type === "outlined" &&
    variant === "primary" &&
    css`
      color: ${color ? color : theme.color_buttons.primary_text_outlined};
    `};

  ${({ type, variant, theme, color }) =>
    type === "outlined" &&
    variant === "success" &&
    css`
      color: ${color ? color : theme.color_buttons.success_text_outlined};
    `};

  ${({ type, variant, theme, color }) =>
    type === "outlined" &&
    variant === "danger" &&
    css`
      color: ${color ? color : theme.color_buttons.danger_text_outlined};
    `};

  ${({ type, variant, theme, color }) =>
    type === "link" &&
    variant === "primary" &&
    css`
      color: ${color ? color : theme.color_buttons.primary_text_link};
    `};

  ${({ type, variant, theme, color }) =>
    type === "link" &&
    variant === "success" &&
    css`
      color: ${color ? color : theme.color_buttons.success_text_link};
    `};

  ${({ type, variant, theme, color }) =>
    type === "link" &&
    variant === "danger" &&
    css`
      color: ${color ? color : theme.color_buttons.danger_text_link};
    `};

  ${({ type, variant, theme, color }) =>
    type === "link" &&
    variant === "warning" &&
    css`
      color: ${color ? color : theme.color_buttons.warning_text_link};
    `};

  ${({ type, variant, theme, color }) =>
    type === "link" &&
    variant === "secondary" &&
    css`
      color: ${color ? color : theme.color_buttons.secondary_text_link};
    `};
`;
export const Icon = styled.View<{ isDisabled?: boolean }>`
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.7;
    `};
`;
