import styled from 'styled-components/native';

export const Wrapper = styled.View`
  gap: 24px;
`;

export const WrapperSkeleton = styled.View`
  gap: 24px;
  padding: 24px;
`;

export const WrapperHeader = styled.View`
  width: 100%;
  margin-top: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const WrapperItem = styled.View`
  width: 48%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const WrapperLine = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperCard = styled.View`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.gray[100]};
`;
