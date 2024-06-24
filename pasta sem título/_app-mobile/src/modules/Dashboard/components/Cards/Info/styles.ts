import styled from "styled-components/native";

export const Wrapper = styled.View`
  border: 1px;
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
  border-style: dashed;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_40};
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_40};
`;
export const WrapperInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const WrapperIcon = styled.View`
  border-radius: 4px;
  padding: 6px;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
`;
