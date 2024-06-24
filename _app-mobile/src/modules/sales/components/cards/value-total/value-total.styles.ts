import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const WrapperItem = styled.View`
  width: 48%;
  padding: 8px 16px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
  align-items: center;
`;

export const WrapperItemHeader = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
