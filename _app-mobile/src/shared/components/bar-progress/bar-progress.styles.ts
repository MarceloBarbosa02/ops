import styled, { css } from 'styled-components/native';
import { TBarProgressProps } from './bar-progress.types';

export const Wrapper = styled.View`
  width: 100%;
  height: 12px;
  padding: 2px;
  border-radius: 2px;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.gray[200]};
`;

export const WrapperBar = styled.View<TBarProgressProps>`
  width: ${({ sizeWidth }) => sizeWidth}%;
  height: 8px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.blue[600]};
`;
