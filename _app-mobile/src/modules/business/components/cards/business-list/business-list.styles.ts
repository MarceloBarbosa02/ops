import styled from 'styled-components/native';

export const Wrapper = styled.View`
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperHeader = styled.View`
  padding: 16px;
  gap: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperHeaderInfo = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

export const WrapperInfo = styled.View`
  padding: 24px;
  gap: 24px;
`;

export const WrapperInfoItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;
