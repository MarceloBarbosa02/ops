import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const Wrapper = styled.View`
  width: 100%;
  border: 1px;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperItem = styled.View`
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const WrapperTop = styled.View``;
export const WrapperSkeleton = styled.View``;
export const WrapperSkeletonCard = styled.View`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.gray[100]};
`;
