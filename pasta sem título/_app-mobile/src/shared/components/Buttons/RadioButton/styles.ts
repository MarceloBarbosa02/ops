import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled(TouchableOpacity)<{ active: boolean }>`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px;
  gap: 24px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};

  ${({ active }) =>
    active &&
    css`
      border: 2px;
      border-color: ${({ theme }) => theme.colors.color_blue_40};
    `};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ active: boolean }>`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  margin-top: 4px;

  ${({ active }) =>
    !active &&
    css`
      color: ${({ theme }) => theme.colors.color_neutral_60};
    `};
`;
export const WrapperDot = styled.View`
  width: 20px;
  height: 20px;
  padding: 3px;
  border: 1px;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const Dot = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.color_blue_40};
`;
