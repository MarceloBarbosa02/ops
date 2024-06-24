import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  margin: 8px 0 0;
  height: ${RFPercentage(6)}px;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  gap: 10px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})``;
export const TextInput = styled.TextInput<{ isFocused: boolean }>`
  border: 1px solid ${({ theme: t }) => t.colors.color_neutral_30};
  flex: 1;
  border-radius: 8px;
  padding-left: 16px;
  color: ${({ theme }) => theme.colors.color_neutral_70};
  z-index: 0;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme: t }) => t.colors.color_blue_40};
    `};
`;
export const ButtonUpdateEmail = styled.TouchableOpacity<{
  isDisabled: boolean;
}>`
  background-color: ${({ theme: t }) => t.colors.color_neutral_100};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 8px;
  width: 32%;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.5;
    `};
`;
export const TextButtonUpdateEmail = styled.Text`
  color: ${({ theme: t }) => t.colors.color_neutral_0};
  font-family: ${({ theme: t }) => t.fonts.Satoshi.bold};
  font-size: 18px;
`;
export const BtnClose = styled(TouchableOpacity)``;
export const WrapperHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
