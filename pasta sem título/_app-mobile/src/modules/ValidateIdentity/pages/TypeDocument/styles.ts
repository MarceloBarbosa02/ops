import { ImageBackground, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  text-align: center;
`;
export const WrapperFooter = styled.View`
  width: 100%;
  padding: 0 0 48px;
  align-items: center;
  gap: 16px;
`;
export const WrapperButton = styled.View`
  width: 100%;
  height: 48px;
`;
export const WrapperButtons = styled.View`
  width: 100%;
  gap: 16px;
  padding: 64px 0 104px;
`;
export const WrapperContent = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px;
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  text-align: center;
`;
export const WrapperInfo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
