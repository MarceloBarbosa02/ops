import { Pressable, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const HelpBtn = styled(TouchableOpacity)`
  padding: 4px;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
export const WrapperQuantity = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 4px ${RFPercentage(2.6)}px;
`;

export const TitleHeader = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
  text-align: center;
`;

export const TitleQuantity = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumS}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
  text-align: center;
`;

export const HeaderButtonLeft = styled(Pressable)`
  width: ${RFPercentage(4)}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const HeaderButtonRight = styled(Pressable)`
  width: ${RFPercentage(4)}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
