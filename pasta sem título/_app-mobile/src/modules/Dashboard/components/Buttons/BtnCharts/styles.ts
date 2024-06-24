import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled(TouchableOpacity)<{ active: boolean }>`
  width: 30%;
  padding: 8px 0;
  align-items: center;
  justify-content: center;

  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_40};
  background-color: ${({ theme }) => theme.colors.color_neutral_30};

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.color_neutral_100};
    `};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ active: boolean }>`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_90};

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.color_neutral_0};
    `};
`;
