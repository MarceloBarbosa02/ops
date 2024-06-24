import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  border-radius: 4px;
  padding: 24px;
  gap: 24px;
`;

export const WrapperItem = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperSkeleton = styled.View``;
