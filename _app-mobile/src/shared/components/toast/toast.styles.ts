import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 20px;
  right: 0px;
  left: 0px;
  border-radius: 4px;
  margin: 0 16px;
  padding: 8px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
  background-color: ${({ theme }) => theme.button.solid.default.tertiary};
`;
