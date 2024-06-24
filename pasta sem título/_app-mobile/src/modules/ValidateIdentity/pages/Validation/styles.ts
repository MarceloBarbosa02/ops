import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding: 36px 0;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;
export const Container = styled.View`
  margin-top: 68px;
  padding: 24px;
  align-items: center;
  gap: 24px;
`;
export const WrapperButton = styled.View`
  width: 100%;
  height: 48px;
`;
export const WrapperButtonError = styled.View`
  width: 100%;
  margin-top: 48px;
  flex-direction: row;
  gap: 8px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l800_d100};
  text-align: center;
  margin: 0 24px;
`;
