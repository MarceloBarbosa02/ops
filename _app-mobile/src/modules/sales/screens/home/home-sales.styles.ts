import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  padding: 24px;
`;

export const WrapperCount = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: 4px;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-radius: 99999px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
