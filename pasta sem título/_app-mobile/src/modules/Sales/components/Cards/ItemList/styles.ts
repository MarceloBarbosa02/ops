import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;
export const WrapperLabel = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const WrapperLine = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
