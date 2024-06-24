import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  gap: 16px;
  padding: 12px 0;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};

  flex-direction: row;
`;
