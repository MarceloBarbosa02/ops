import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View<{ isBorder: boolean }>`
  width: 100%;
  padding: 8px ${RFPercentage(2)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;

  ${({ isBorder, theme }) =>
    !isBorder &&
    css`
      border-bottom-width: 1px;
      border-color: ${theme.colors.color_neutral_10};
    `}
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})``;
