import styled, { css } from 'styled-components/native';
import { Text } from 'react-native';
import { TTypographyProps } from './typography.types';

export const Typography = styled(Text)<Omit<TTypographyProps, 'title'>>`
  text-align: ${({ align }) => align || 'left'};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};

  ${({ lineThrough, theme }) =>
    lineThrough &&
    css`
      text-decoration: line-through;
      text-decoration-color: ${theme.gray[600]};
    `}

  ${({ variant, size, theme }) =>
    variant === 'body' &&
    size === 'small' &&
    css`
      font-size: ${theme.fonts.sizes.smallX}px;
      line-height: ${theme.fonts.sizes.large}px;
    `};

  ${({ variant, size, theme }) =>
    variant === 'body' &&
    size === 'medium' &&
    css`
      font-size: ${theme.fonts.sizes.medium}px;
      line-height: ${theme.fonts.sizes.large}px;
    `};

  ${({ variant, size, theme }) =>
    variant === 'body' &&
    size === 'large' &&
    css`
      font-size: ${theme.fonts.sizes.mediumX}px;
      line-height: ${theme.fonts.sizes.large}px;
    `};

  ${({ variant, size, theme }) =>
    variant === 'body' &&
    size === 'large2' &&
    css`
      font-size: ${theme.fonts.sizes.mediumX}px;
      line-height: 40px;
    `};

  ${({ variant, size, theme }) =>
    variant === 'head' &&
    size === 'small' &&
    css`
      font-size: ${theme.fonts.sizes.largeS}px;
      line-height: ${theme.fonts.sizes.largeXX}px;
    `};

  ${({ variant, size, theme }) =>
    variant === 'head' &&
    size === 'medium' &&
    css`
      font-size: ${theme.fonts.sizes.large}px;
      line-height: ${theme.fonts.sizes.largeXX}px;
    `};

  ${({ variant, size, theme }) =>
    variant === 'head' &&
    size === 'large' &&
    css`
      font-size: ${theme.fonts.sizes.largeXX}px;
      line-height: ${theme.fonts.sizes.largeXX}px;
    `};

  ${({ variant, size }) =>
    variant === 'head' &&
    size === 'large2' &&
    css`
      font-size: 52px;
      line-height: 60px;
    `};

  ${({ variant, theme, size }) =>
    variant === 'subtitle' &&
    size === 'small' &&
    css`
      font-size: ${theme.fonts.sizes.smallS}px;
      line-height: ${theme.fonts.sizes.medium}px;
    `};
  ${({ variant, theme, size }) =>
    variant === 'subtitle' &&
    size === 'medium' &&
    css`
      font-size: ${theme.fonts.sizes.small}px;
      line-height: ${theme.fonts.sizes.medium}px;
    `};
  ${({ variant, theme, size }) =>
    variant === 'subtitle' &&
    size === 'large' &&
    css`
      font-size: ${theme.fonts.sizes.smallX}px;
      line-height: ${theme.fonts.sizes.medium}px;
    `};

  ${({ weight, theme }) =>
    weight === 'black' &&
    css`
      font-weight: 900;
      font-family: ${theme.fonts.Satoshi.variable};
    `}
  ${({ weight, theme }) =>
    weight === 'bold' &&
    css`
      font-weight: 700;
      font-family: ${theme.fonts.Satoshi.bold};
    `}
  ${({ weight, theme }) =>
    weight === 'medium' &&
    css`
      font-weight: 500;
      font-family: ${theme.fonts.Satoshi.medium};
    `}
  ${({ weight, theme }) =>
    weight === 'regular' &&
    css`
      font-weight: 400;
      font-family: ${theme.fonts.Satoshi.regular};
    `}
  ${({ weight, theme }) =>
    weight === 'light' &&
    css`
      font-weight: 300;
      font-family: ${theme.fonts.Satoshi.light};
    `}

  ${({ colorValue, theme }) =>
    colorValue === 'neutral' &&
    css`
      color: ${theme.gray[900]};
      text-decoration-color: ${theme.gray[900]};
    `}
  ${({ colorValue, theme }) =>
    colorValue === 'neutral-black' &&
    css`
      color: ${theme.gray[800]};
      text-decoration-color: ${theme.gray[800]};
    `}
  ${({ colorValue, theme }) =>
    colorValue === 'neutral-bold' &&
    css`
      color: ${theme.gray[700]};
      text-decoration-color: ${theme.gray[700]};
    `}
  ${({ colorValue, theme }) =>
    colorValue === 'neutral-medium' &&
    css`
      color: ${theme.gray[600]};
      text-decoration-color: ${theme.gray[600]};
    `}
  ${({ colorValue, theme }) =>
    colorValue === 'neutral-regular' &&
    css`
      color: ${theme.gray[500]};
      text-decoration-color: ${theme.gray[500]};
    `}
  ${({ colorValue, theme }) =>
    colorValue === 'neutral-light' &&
    css`
      color: ${theme.gray[400]};
      text-decoration-color: ${theme.gray[400]};
    `}
  ${({ colorValue, theme }) =>
    colorValue === 'primary' &&
    css`
      color: ${theme.blue[600]};
      text-decoration-color: ${theme.blue[600]};
    `}
  ${({ colorValue, theme }) =>
    colorValue === 'success' &&
    css`
      color: ${theme.green[600]};
      text-decoration-color: ${theme.green[600]};
    `}
  ${({ colorValue, theme }) =>
    colorValue === 'danger' &&
    css`
      color: ${theme.red[600]};
      text-decoration-color: ${theme.red[600]};
    `}
  ${({ colorValue, theme }) =>
    colorValue === 'warning' &&
    css`
      color: ${theme.yellow[600]};
      text-decoration-color: ${theme.yellow[600]};
    `}
  ${({ colorValue, theme }) =>
    colorValue === 'yellow' &&
    css`
      color: ${theme.yellow[700]};
      text-decoration-color: ${theme.yellow[700]};
    `}
  ${({ colorValue, theme }) =>
    colorValue === 'white' &&
    css`
      color: ${theme.button.disabled.background};
      text-decoration-color: ${theme.button.disabled.background};
    `}
`;
