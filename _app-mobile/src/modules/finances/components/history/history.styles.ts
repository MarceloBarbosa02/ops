import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  gap: 16px;
  padding: 16px 0;
`;
export const WrapperSeparate = styled.View<{ line?: boolean }>`
  width: 100%;
  padding: 6px 22px;
  border-color: ${({ theme }) => theme.gray[400]};
  background-color: ${({ theme }) => theme.gray[100]};

  ${({ line }) =>
    line &&
    css`
      align-items: center;
    `}
`;

export const LineSeparate = styled.View`
  width: 30%;
  height: 1px;
  background-color: ${({ theme }) => theme.gray[300]};
`;
