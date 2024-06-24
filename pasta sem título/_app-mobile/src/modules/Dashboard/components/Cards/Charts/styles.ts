import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  /* padding: 16px; */
  margin-top: 16px;
  gap: 12px;

  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  padding: 16px;
  gap: 8px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;
export const LabelValue = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_40};
`;
export const TitleValue = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const WrapperTitle = styled.View`
  width: 100%;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;
export const WrapperDays = styled.View`
  width: 100%;
  gap: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
