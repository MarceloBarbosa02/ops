import { TouchableOpacity, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: ${RFPercentage(2)}px;
  border-radius: 8px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.color_neutral_30};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
    `};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const WrapperAvatar = styled.View`
  width: ${RFPercentage(5)}px;
  height: ${RFPercentage(5)}px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const TitleAvatar = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_0};
`;
export const WrapperFlag = styled.View`
  width: 14%;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const TitleFlag = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_0};
`;
export const WrapperDot = styled.View`
  width: 20px;
  height: 20px;
  padding: 3px;
  border: 1px;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const Dot = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.color_blue_40};
`;
export const WrapperInfo = styled.View`
  flex: 1;
  gap: 4px;
`;
export const ImgProduct = styled(Image)`
  width: ${RFPercentage(8)}px;
  height: ${RFPercentage(8)}px;
`;
