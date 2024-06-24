import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
`;
export const Container = styled.View`
  gap: 16px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const TitleBalance = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ color: string }>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.large}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ color }) => color};
`;
export const WrapperYesterday = styled.View`
  gap: 16px;
  align-items: flex-end;
`;
export const WrapperLabel = styled.View`
  gap: 6px;
  flex-direction: row;
`;
export const TitleYesterday = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;
export const TitleBalanceYesterday = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;
