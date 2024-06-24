import styled, { css } from 'styled-components/native';
import { TouchableOpacity, Platform, Pressable } from 'react-native';
import { TButtonProps } from './button.types';

export const Wrapper = styled(TouchableOpacity)<Omit<TButtonProps, 'title'>>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ sizeWidth }) =>
    typeof sizeWidth === 'number'
      ? css`
          width: ${sizeWidth}%;
        `
      : css`
          width: auto;
        `};

  ${({ size }) =>
    size === 'large' &&
    css`
      padding: 16px;
    `};

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 12px 16px;
    `};

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 8px 16px;
    `};

  ${({ radius }) =>
    radius === 'full' &&
    css`
      border-radius: 99999px;
    `};

  ${({ radius }) =>
    radius === 'lg' &&
    css`
      border-radius: 12px;
    `};

  ${({ radius }) =>
    radius === 'md' &&
    css`
      border-radius: 8px;
    `};

  ${({ radius }) =>
    radius === 'sm' &&
    css`
      border-radius: 4px;
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'solid' &&
    colorValue === 'danger' &&
    css`
      background-color: ${disabledColor
        ? disabledColor
        : theme.button.solid.default.danger};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'solid' &&
    colorValue === 'primary' &&
    css`
      background-color: ${disabledColor
        ? disabledColor
        : theme.button.solid.default.primary};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'solid' &&
    colorValue === 'secondary' &&
    css`
      background-color: ${disabledColor ? disabledColor : theme.gray[600]};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'solid' &&
    colorValue === 'success' &&
    css`
      background-color: ${disabledColor
        ? disabledColor
        : theme.button.solid.default.success};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'solid' &&
    colorValue === 'tertiary' &&
    css`
      background-color: ${disabledColor
        ? disabledColor
        : theme.button.solid.default.tertiary};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'solid' &&
    colorValue === 'warning' &&
    css`
      background-color: ${disabledColor
        ? disabledColor
        : theme.button.solid.default.warning};
    `};

  ${({ variant }) =>
    variant === 'link' &&
    css`
      background-color: transparent;
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'danger' &&
    css`
      background-color: transparent;
      border: 2px;
      border-color: ${theme.button.outlined.danger};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'primary' &&
    css`
      background-color: transparent;
      border: 2px;
      border-color: ${theme.button.outlined.primary};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'success' &&
    css`
      background-color: transparent;
      border: 2px;
      border-color: ${theme.button.outlined.success};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'tertiary' &&
    css`
      background-color: transparent;
      border: 2px;
      border-color: ${theme.button.solid.default.tertiary};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'secondary' &&
    css`
      background-color: transparent;
      border: 2px;
      border-color: ${theme.button.solid.default.tertiary};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'warning' &&
    css`
      background-color: transparent;
      border: 2px;
      border-color: ${theme.button.orange[600]};
    `};
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<Omit<TButtonProps, 'title'>>`
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};

  ${({ textWeightButton }) =>
    textWeightButton === 'bold' &&
    css`
      font-weight: 700;
      font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
    `};
  ${({ textWeightButton }) =>
    textWeightButton === 'medium' &&
    css`
      font-weight: 500;
      font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
    `};
  ${({ textWeightButton }) =>
    textWeightButton === 'regular' &&
    css`
      font-weight: 400;
      font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
    `};

  ${({ size, theme }) =>
    size === 'small' &&
    css`
      font-size: ${theme.fonts.sizes.smallX}px;
      line-height: 24px;
    `};

  ${({ size, theme }) =>
    size === 'medium' &&
    css`
      font-size: ${theme.fonts.sizes.medium}px;
      line-height: 24px;
    `};

  ${({ size, theme }) =>
    size === 'large' &&
    css`
      font-size: ${theme.fonts.sizes.mediumX}px;
      line-height: 24px;
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'solid' &&
    colorValue === 'danger' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.text.primary};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'solid' &&
    colorValue === 'primary' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.text.primary};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'solid' &&
    colorValue === 'secondary' &&
    css`
      color: ${disabledColor ? disabledColor : theme.gray[100]};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'solid' &&
    colorValue === 'success' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.text.primary};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'solid' &&
    colorValue === 'tertiary' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.text.secondary};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'solid' &&
    colorValue === 'warning' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.text.secondary};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'outlined' &&
    colorValue === 'danger' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.outlined.danger};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'outlined' &&
    colorValue === 'primary' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.outlined.primary};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'outlined' &&
    colorValue === 'warning' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.orange[600]};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'outlined' &&
    colorValue === 'success' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.outlined.success};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'link' &&
    colorValue === 'danger' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.link.danger};
      text-decoration-color: ${disabledColor
        ? disabledColor
        : theme.button.link.danger};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'link' &&
    colorValue === 'primary' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.link.primary};
      text-decoration-color: ${disabledColor
        ? disabledColor
        : theme.button.link.primary};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'link' &&
    colorValue === 'secondary' &&
    css`
      color: ${disabledColor ? disabledColor : theme.gray[700]};
      text-decoration-color: ${disabledColor ? disabledColor : theme.gray[700]};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'link' &&
    colorValue === 'success' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.link.success};
      text-decoration-color: ${disabledColor
        ? disabledColor
        : theme.button.link.success};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'link' &&
    colorValue === 'warning' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.link.warning};
      text-decoration-color: ${disabledColor
        ? disabledColor
        : theme.button.link.warning};
    `};

  ${({ variant, colorValue, disabledColor, theme }) =>
    variant === 'outlined' &&
    colorValue === 'tertiary' &&
    css`
      color: ${disabledColor ? disabledColor : theme.button.link.secondary};
    `};
`;

export const Icon = styled.View<{ isDisabled?: boolean }>`
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.7;
    `};
`;

export const WrapperOption = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperOptionInfo = styled.View`
  gap: 16px;
  flex-direction: row;
  align-items: center;
`;
