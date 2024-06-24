import { Platform, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;
export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 ${RFPercentage(2.7)}px;
  width: 100%;
  margin-top: 96px;
  gap: 24px;
`;
export const ContainerSignIn = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ContainerSignUp = styled.View``;

export const Form = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFPercentage(2.7)}px;
  gap: 10px;
  margin: 36px 0;
  width: 100%;
  border: 1px;
  border-radius: 16px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_blue_80};
`;

export const ImgLogo = styled.Image`
  height: 36px;
  width: 200px;
`;

export const WrapperImg = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const WrapperHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 3px;
  gap: 4px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.color_neutral_30};
`;

export const BtnHeader = styled(TouchableOpacity)<{ active: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.color_neutral_30};

  ${({ theme, active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.color_neutral_0};
    `};
`;

export const TitleBtn = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;

export const TitleFooter = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
