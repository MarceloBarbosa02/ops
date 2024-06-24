import styled, { css } from 'styled-components/native';

import { TextInput, TouchableOpacity } from 'react-native';

interface Props {
  isError?: boolean;
  isFocused?: boolean;
  sizePin?: number;
}

export const Wrapper = styled.View`
  width: 100%;
  padding: 12px 0;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
`;

export const WrapperPin = styled(TouchableOpacity)<Props>`
  width: ${({ sizePin }) => sizePin}px;
  height: ${({ sizePin }) => sizePin}px;
  align-items: center;
  justify-content: center;

  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  border-radius: 4px;

  ${({ isError }) =>
    isError &&
    css`
      border-color: ${({ theme }) => theme.red[600]};
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.blue[600]};
    `}
`;

export const WrapperInput = styled.View<Props>`
  width: 56px;
  height: 56px;
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.blue[600]};
    `}
`;

export const InputPin = styled(TextInput)`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.large}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.gray[700]};
`;
