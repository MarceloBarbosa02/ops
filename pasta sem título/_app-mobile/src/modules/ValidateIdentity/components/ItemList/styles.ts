import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 90%;
  align-items: center;
  gap: 12px;
  flex-direction: row;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
