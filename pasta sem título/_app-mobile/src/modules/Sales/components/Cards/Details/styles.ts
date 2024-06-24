import { RFPercentage } from "react-native-responsive-fontsize";
import { Image } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  margin-top: 24px;
`;

export const WrapperHeader = styled.View`
  padding: 0 ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
`;
export const Quantity = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;
export const ImgProduct = styled(Image)`
  width: 56px;
  height: 56px;
  border-radius: 8px;
`;
