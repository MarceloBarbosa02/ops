import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled(TouchableOpacity)<{ isDisabled: boolean }>`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: ${RFPercentage(2.6)}px ${RFPercentage(3)}px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_10};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.5;
    `}
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ out: boolean }>`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  margin-left: 12px;

  ${({ out }) =>
    out &&
    css`
      font-weight: 700;
      font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
      color: ${({ theme }) => theme.colors.color_red_40};
    `};
`;
export const WrapperFlag = styled.View`
  padding: 2px 10px;
  background-color: ${({ theme }) => theme.colors.color_neutral_80};
  margin-right: 12px;
  border-radius: 4px;
  flex-direction: row;
`;
export const TitleFlag = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  color: ${({ theme }) => theme.colors.color_neutral_10};
  text-align: center;
  margin-left: 4px;
`;
