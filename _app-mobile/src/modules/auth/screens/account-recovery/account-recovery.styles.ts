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

export const WrapperInfo = styled.View`
  align-items: center;
  padding: 16px 24px 24px;
  gap: 18px;
  margin-bottom: 12px;
`;

export const WrapperInfoContent = styled.View`
  gap: 24px;
`;

export const WrapperInfoEmail = styled.View`
  width: 100%;
  padding: 8px 14px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const WrapperCard = styled.View`
  width: 100%;
  margin-top: 32px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 14px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const WrapperButtonLogin = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: 16px;
  padding-left: 6px;
`;
