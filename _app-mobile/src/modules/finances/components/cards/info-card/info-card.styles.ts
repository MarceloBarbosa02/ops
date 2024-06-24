import styled from 'styled-components/native';

export const Wrapper = styled.View``;
export const WrapperHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  gap: 4px;
`;
export const WrapperItem = styled.View`
  padding: 4px 16px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
export const WrapperLabel = styled.View`
  gap: 6px;
  flex-direction: row;
  align-items: center;
`;
export const WrapperCards = styled.View`
  gap: 12px;
`;
export const WrapperSkeleton = styled.View``;
