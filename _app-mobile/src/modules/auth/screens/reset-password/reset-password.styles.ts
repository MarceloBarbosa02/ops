import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  border-radius: 8px;
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  padding: 24px;
`;

export const WrapperLogo = styled.View`
  align-items: center;
  padding: 24px 0;
`;

export const WrapperForm = styled.View`
  gap: 18px;
`;
export const WrapperInfo = styled.View`
  align-items: center;
  gap: 18px;
  margin-top: 16px;
`;
