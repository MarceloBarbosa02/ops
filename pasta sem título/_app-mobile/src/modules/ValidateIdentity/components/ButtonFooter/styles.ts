import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  gap: 16px;
  margin-bottom: 24px;
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
