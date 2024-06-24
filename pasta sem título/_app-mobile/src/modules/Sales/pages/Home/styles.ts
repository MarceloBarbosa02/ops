import { Dimensions, Platform, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 0 ${RFPercentage(4)}px;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  gap: ${RFPercentage(2)}px;
  padding: 0 ${RFPercentage(3)}px ${RFPercentage(8)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: 16px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;

export const WrapperTotal = styled.View`
  margin: 8px 0 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const WrapperFooter = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const FooterTitle = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const FooterDescription = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
  text-align: center;
`;
export const WrapperContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const WrapperCount = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: 4px;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-radius: 99999px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
`;
export const TitleCount = styled.Text`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l800_d100};
`;
