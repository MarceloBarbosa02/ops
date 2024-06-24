import styled, { css } from 'styled-components/native';
import { TRadioProps } from './radio.types';

export const Wrapper = styled.View`
  flex: auto;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  padding: 4px;
`;

export const WrapperGroup = styled.View<TRadioProps>`
  gap: 8px;
  align-items: center;
  padding: 4px;

  ${({ alignFlex }) =>
    alignFlex === 'row' &&
    css`
      flex-direction: row;
    `}
`;
