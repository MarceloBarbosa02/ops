import styled, { css } from 'styled-components/native';
import { TStrengthBarProps } from './passwords.types';

export const Wrapper = styled.View`
  gap: 12px;
  margin-top: 16px;
`;
export const WrapperPassword = styled.View`
  width: auto;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
export const WrapperBar = styled.View`
  flex: auto;
  height: 10px;
  border-radius: 50px;
  overflow: hidden;
`;
export const WrapperParts = styled.View<TStrengthBarProps>`
  height: 6px;

  ${({ passWorld, theme }) =>
    passWorld === 'Fraca' &&
    css`
      width: 33%;
      background-color: ${theme.red[600]};
    `}
  ${({ passWorld, theme }) =>
    passWorld === 'Média' &&
    css`
      width: 66%;
      background-color: ${theme.yellow[600]};
    `}
  ${({ passWorld, theme }) =>
    passWorld === 'Forte' &&
    css`
      width: 100%;
      background-color: ${theme.green[600]};
    `}
`;
