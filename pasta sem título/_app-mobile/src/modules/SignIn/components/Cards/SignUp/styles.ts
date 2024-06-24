import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  margin: 24px 0 18px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;
export const TitleFooter = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_blue_40};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.color_blue_40};
  padding: 0 4px;
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  margin: 24px 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_70};
  text-align: center;
`;
export const BtnFooter = styled.TouchableOpacity`
  width: 100%;
  padding: 0 4px;
  align-items: center;
  justify-content: center;
`;
export const WrapperButton = styled.View`
  width: 100%;
  padding: 0 16px;
`;
