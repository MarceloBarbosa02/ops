import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  margin: 16px 0;
  padding: 16px;
  border: 1px;
  border-radius: 8px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperItem = styled.View`
  width: 100%;
  margin: 4px 0;
  flex-direction: row;
  align-items: center;
`;
