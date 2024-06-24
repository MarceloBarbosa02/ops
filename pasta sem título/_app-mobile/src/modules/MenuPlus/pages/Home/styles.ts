import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  padding: 0 ${RFPercentage(3)}px;
`;

export const WrapperItems = styled.View`
  width: 100%;
  padding: ${RFPercentage(3)}px 0;
`;
export const WrapperFooter = styled.View`
  width: 100%;
  padding: ${RFPercentage(2.3)}px ${RFPercentage(3)}px;
`;
export const TitleFlag = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
