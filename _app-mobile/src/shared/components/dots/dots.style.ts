import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  gap: 4px;
`;
export const WrapperDots = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[400]};
`;
