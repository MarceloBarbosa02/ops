import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View<{ type: string }>`
  width: 100%;
  padding: ${RFPercentage(1)}px 0;

  ${({ type }) =>
    type === "marketing" &&
    css`
      align-items: center;
      flex-direction: row;
    `}
`;
export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ type: string }>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_80};

  ${({ type }) =>
    type === "marketing" &&
    css`
      width: 45%;
    `}
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
