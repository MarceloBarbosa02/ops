import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: 16px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
