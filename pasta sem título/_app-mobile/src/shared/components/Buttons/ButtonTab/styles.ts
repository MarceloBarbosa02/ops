import styled, { css } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Platform } from "react-native";

export const Wrapper = styled.View`
  height: 100%;
  margin-top: ${Platform.OS === "ios" ? 12 : 4}px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ color: string; focused: boolean }>`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ color }) => color};
  margin-top: 4px;

  ${({ focused }) =>
    focused &&
    css`
      font-weight: 700;
      font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
    `};
`;
