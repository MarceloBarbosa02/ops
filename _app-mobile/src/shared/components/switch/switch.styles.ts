import styled, { css } from 'styled-components/native';
import { TSwitchProps } from './switch.types';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ButtonToggle = styled.Pressable<Omit<TSwitchProps, 'title'>>`
  padding: 4px;
  border-radius: 9999px;

  ${({ size }) =>
    size === 'lg' &&
    css`
      width: 56px;
      height: 32px;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      width: 48px;
      height: 28px;
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      width: 40px;
      height: 24px;
    `}

  ${({ variant, active, theme }) =>
    variant === 'default' &&
    !active &&
    css`
      align-items: flex-start;
      background-color: ${theme.gray[400]};
    `}

  ${({ variant, active, theme }) =>
    variant === 'default' &&
    active &&
    css`
      align-items: flex-end;
      background-color: ${theme.gray[400]};
    `}

  ${({ variant, active, theme }) =>
    variant === 'primary' &&
    !active &&
    css`
      align-items: flex-start;
      background-color: ${theme.gray[400]};
    `}

  ${({ variant, active, theme }) =>
    variant === 'primary' &&
    active &&
    css`
      align-items: flex-end;
      background-color: ${theme.blue[500]};
    `}
`;

export const Dot = styled.View<Omit<TSwitchProps, 'title'>>`
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.gray[50]};

  ${({ size }) =>
    size === 'lg' &&
    css`
      width: 24px;
      height: 24px;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      width: 20px;
      height: 20px;
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      width: 16px;
      height: 16px;
    `}
`;
