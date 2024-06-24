import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Page {
  page?: boolean;
  isDisabled?: boolean;
  active?: boolean;
}

export const Container = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  height: ${RFPercentage(8)}px;
`;
export const PageItem = styled.TouchableOpacity<Page>`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_10};

  border-radius: 12px;

  align-items: center;
  justify-content: center;

  ${({ page }) =>
    page &&
    css`
      background-color: ${({ theme }) => theme.colors.color_neutral_100};
    `};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.4;
    `};

  ${({ active }) =>
    active &&
    css`
      border: 0;
      border-color: transparent;
    `};
`;
export const PageText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<Page>`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.color_neutral_100};

  ${({ page }) =>
    page &&
    css`
      color: ${({ theme }) => theme.colors.color_neutral_0};
    `};
`;
