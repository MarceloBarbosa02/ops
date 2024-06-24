import styled from 'styled-components/native';

export const Wrapper = styled.View`
  gap: 8px;
  padding: 16px 32px 56px;
  align-items: center;
  justify-content: center;
`;

export const WrapperInfo = styled.View`
  gap: 8px;
  padding: 16px 32px 56px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.gray[100]};
`;
