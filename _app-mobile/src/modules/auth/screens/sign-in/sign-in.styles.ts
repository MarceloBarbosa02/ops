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

export const WrapperButtons = styled.View`
  width: 100%;
  gap: 32px;
`;

export const WrapperForm = styled.View`
  margin-top: 16px;
  gap: 12px;
`;

export const WrapperButton = styled.View`
  align-items: flex-end;
`;

export const WrapperButtonRegister = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
`;
