import styled, { css } from 'styled-components/native';
import { TBadgeProps } from './badge.types';

export const Wrapper = styled.View<Omit<TBadgeProps, 'label'>>`
  width: auto;
  border: 1px;
  border-style: ${({ typeBorder }) => typeBorder};
  align-items: center;

  ${({ size }) =>
    size === 'lg' &&
    css`
      padding: 4px 12px;
    `};

  ${({ size }) =>
    size === 'md' &&
    css`
      padding: 4px 8px;
    `};

  ${({ size }) =>
    size === 'sm' &&
    css`
      padding: 2px 8px;
    `};

  ${({ radius }) =>
    radius === 'full' &&
    css`
      border-radius: 9999px;
    `};

  ${({ radius }) =>
    radius === 'lg' &&
    css`
      border-radius: 16px;
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

  ${({ variant, colorValue, theme }) =>
    variant === 'solid' &&
    colorValue === 'danger' &&
    css`
      background-color: ${theme.red[600]};
      border-color: ${theme.red[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'solid' &&
    colorValue === 'primary' &&
    css`
      background-color: ${theme.blue[600]};
      border-color: ${theme.blue[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'solid' &&
    colorValue === 'purple' &&
    css`
      background-color: ${theme.purple[600]};
      border-color: ${theme.purple[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'solid' &&
    colorValue === 'secondary' &&
    css`
      background-color: ${theme.gray[600]};
      border-color: ${theme.gray[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'solid' &&
    colorValue === 'success' &&
    css`
      background-color: ${theme.green[600]};
      border-color: ${theme.green[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'solid' &&
    colorValue === 'warning' &&
    css`
      background-color: ${theme.orange[600]};
      border-color: ${theme.orange[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'danger' &&
    css`
      background-color: ${theme.red[50]};
      border-color: ${theme.red[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'primary' &&
    css`
      background-color: ${theme.blue[50]};
      border-color: ${theme.blue[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'purple' &&
    css`
      background-color: ${theme.purple[50]};
      border-color: ${theme.purple[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'secondary' &&
    css`
      background-color: ${theme.gray[50]};
      border-color: ${theme.gray[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'success' &&
    css`
      background-color: ${theme.green[50]};
      border-color: ${theme.green[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'warning' &&
    css`
      background-color: ${theme.orange[50]};
      border-color: ${theme.orange[600]};
    `};
`;

export const Title = styled.Text<Omit<TBadgeProps, 'label'>>`
  font-weight: 900;
  font-family: ${({ theme }) => theme.fonts.Satoshi.variable};

  ${({ size }) =>
    size === 'lg' &&
    css`
      font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
    `};

  ${({ size }) =>
    size === 'md' &&
    css`
      font-size: ${({ theme }) => theme.fonts.sizes.small}px;
    `};

  ${({ size }) =>
    size === 'sm' &&
    css`
      font-size: ${({ theme }) => theme.fonts.sizes.smallS}px;
    `};

  ${({ variant, theme }) =>
    variant === 'solid' &&
    css`
      color: ${theme.gray[50]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'danger' &&
    css`
      color: ${theme.red[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'primary' &&
    css`
      color: ${theme.blue[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'purple' &&
    css`
      color: ${theme.purple[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'secondary' &&
    css`
      color: ${theme.gray[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'success' &&
    css`
      color: ${theme.green[600]};
    `};

  ${({ variant, colorValue, theme }) =>
    variant === 'outlined' &&
    colorValue === 'warning' &&
    css`
      color: ${theme.orange[600]};
    `};
`;
