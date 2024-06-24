import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
  isError: boolean;
  isFocused: boolean;
  sizePin: number;
}

export const Wrapper = styled(TouchableOpacity)<Props>`
  width: ${({ sizePin }) => sizePin}px;
  height: ${({ sizePin }) => sizePin}px;
  align-items: center;
  justify-content: center;

  border: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_40};
  border-radius: 8px;

  ${({ isError }) =>
    isError &&
    css`
      border-color: ${({ theme }) => theme.colors.color_red_40};
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.color_blue_40};
    `}
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
