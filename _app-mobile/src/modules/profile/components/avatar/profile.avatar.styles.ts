import { Pressable } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonToggle = styled(Pressable)`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.gray[50]};
  border: 2px;
  border-radius: 999px;
  border-color: ${({ theme }) => theme.blue[600]};
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

export const Flag = styled.View`
  width: 100px;
  height: 100px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.gray[700]};
`;
