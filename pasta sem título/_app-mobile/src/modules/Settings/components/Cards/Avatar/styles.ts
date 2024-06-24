import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const Content = styled.View`
  width: ${RFPercentage(13)}px;
  height: ${RFPercentage(13)}px;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: ${RFPercentage(13)}px;
  height: ${RFPercentage(13)}px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.largeX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_0};
`;
export const ImgAvatar = styled(Image)`
  width: ${RFPercentage(13)}px;
  height: ${RFPercentage(13)}px;
`;
export const BtnAvatar = styled(TouchableOpacity)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 9999;
  width: ${RFPercentage(5)}px;
  height: ${RFPercentage(5)}px;
  align-items: center;
  justify-content: center;
  border: 2px;
  border-radius: 100px;
  border-color: ${({ theme }) => theme.colors.color_blue_40};
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;
