import { DimensionValue, Pressable } from 'react-native';
import styled, { css } from 'styled-components/native';
import { TCheckboxProps } from './checkbox.types';

export const Wrapper = styled.View``;

export const WrapperButton = styled(Pressable)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 0 8px;
`;

export const WrapperCheck = styled.View<Omit<TCheckboxProps, 'label'>>`
  align-items: center;
  justify-content: center;
  border: 2px;
  background-color: transparent;

  ${({ size }) =>
    size === 'large' &&
    css`
      width: 24px;
      height: 24px;
    `};

  ${({ size }) =>
    size === 'medium' &&
    css`
      width: 20px;
      height: 20px;
    `};

  ${({ size }) =>
    size === 'small' &&
    css`
      width: 16px;
      height: 16px;
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

  ${({ colorValue, theme }) =>
    colorValue === 'danger' &&
    css`
      border-color: ${theme.button.solid.pressed.danger};
    `};

  ${({ colorValue, theme }) =>
    colorValue === 'primary' &&
    css`
      border-color: ${theme.button.solid.default.primary};
    `};

  ${({ colorValue, theme }) =>
    colorValue === 'default' &&
    css`
      border-color: ${theme.button.solid.default.secondary};
    `};

  ${({ colorValue, theme }) =>
    colorValue === 'success' &&
    css`
      border-color: ${theme.button.solid.default.success};
    `};

  ${({ colorValue, theme }) =>
    colorValue === 'purple' &&
    css`
      border-color: ${theme.purple[600]};
    `};

  ${({ colorValue, theme }) =>
    colorValue === 'warning' &&
    css`
      border-color: ${theme.button.solid.default.warning};
    `};
  ${({ colorValue, theme }) =>
    colorValue === 'danger' &&
    css`
      border-color: ${theme.button.solid.pressed.danger};
    `};

  ${({ colorValue, isChecked, theme }) =>
    colorValue === 'primary' &&
    isChecked &&
    css`
      border-color: ${theme.button.solid.default.primary};
      background-color: ${theme.button.solid.default.primary};
    `};

  ${({ colorValue, isChecked, theme }) =>
    colorValue === 'primary' &&
    !isChecked &&
    css`
      border-color: ${theme.button.solid.default.danger};
    `};

  ${({ colorValue, isChecked, theme }) =>
    colorValue === 'default' &&
    isChecked &&
    css`
      border-color: ${theme.button.solid.default.secondary};
      background-color: ${theme.button.solid.default.secondary};
    `};

  ${({ colorValue, isChecked, theme }) =>
    colorValue === 'success' &&
    isChecked &&
    css`
      border-color: ${theme.button.solid.default.success};
      background-color: ${theme.button.solid.default.success};
    `};

  ${({ colorValue, isChecked, theme }) =>
    colorValue === 'purple' &&
    isChecked &&
    css`
      border-color: ${theme.purple[600]};
      background-color: ${theme.purple[600]};
    `};

  ${({ colorValue, isChecked, theme }) =>
    colorValue === 'warning' &&
    isChecked &&
    css`
      border-color: ${theme.button.solid.default.warning};
      background-color: ${theme.button.solid.default.warning};
    `};
`;
