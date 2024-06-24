import { Dimensions } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

const windowHeight = Dimensions.get("window").height;

interface Props {
  isError?: boolean;
  isFocused?: boolean;
}

export const Wrapper = styled.View`
  height: 100%;
  justify-content: space-between;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  margin: 8px 0;
`;

export const Container = styled.ScrollView`
  max-height: ${windowHeight - 250}px;
  padding: 0 24px;
`;

export const Text = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.color_red_40};
`;

export const InputMask = styled(TextInputMask)<Props>`
  border: 1px solid ${({ theme: t }) => t.colors.color_neutral_30};
  border-radius: 4px;
  height: 48px;
  padding: 0 12px;
  color: ${({ theme: t }) => t.colors.color_neutral_90};

  ${({ isError }) =>
    isError &&
    css`
      border-color: ${({ theme }) => theme.colors.color_red_40};
    `};

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme: t }) => t.colors.color_blue_40};
    `};
`;
export const ContainerCard = styled.View`
  margin-top: 24px;
  padding: 24px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
`;

export const TitleCard = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
