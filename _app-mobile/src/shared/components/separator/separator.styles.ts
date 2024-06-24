import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const WrapperParts = styled.View`
  width: 44%;
  height: 1px;
  background-color: ${({ theme }) => theme.gray[300]};
`;
