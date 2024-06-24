import { Animated } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 24px;
`;

export const Dot = styled(Animated.View)<{ active?: boolean }>`
  width: 30px;
  height: 8px;
  background-color: ${({ theme }) => theme.gray[400]};
  border-radius: 8px;

  ${({ active }) =>
    active &&
    css`
      width: 60px;
      background-color: ${({ theme }) => theme.gray[600]};
    `};
`;
