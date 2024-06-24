import styled from 'styled-components/native';

export const Wrapper = styled.View`
  gap: 8px;
`;
export const WrapperCard = styled.View`
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
  background-color: ${({ theme }) => theme.menu.gray.primary};
`;
export const Content = styled.View`
  width: 100%;
  padding: 16px 24px;
  gap: 16px;
`;
