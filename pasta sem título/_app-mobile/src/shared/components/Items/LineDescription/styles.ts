import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 6px;
  margin-bottom: 4px;
`;
export const Dot = styled.View`
  width: 3px;
  height: 3px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
