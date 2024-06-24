import { TextInput, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  padding: 16px 16px 0;
  gap: 4px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  color: ${({ theme }) => theme.colors.gray_l800_d100};
`;
export const WrapperBtnProduct = styled(TouchableOpacity)<{
  isActive: boolean;
}>`
  padding: ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-color: ${theme.colors.blue_l400_d500};
    `};
`;
export const TextBtnProduct = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const InputEmail = styled(TextInput)`
  flex: 1;
  height: 36px;
  padding: 8px;
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
