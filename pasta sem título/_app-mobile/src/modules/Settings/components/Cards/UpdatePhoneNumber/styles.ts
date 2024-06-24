import styled, { css } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { TextInputMask as inputMask } from "react-native-masked-text";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;
  margin: 16px 0;
  justify-content: space-between;
  gap: 12px;
  align-self: center;
  flex-direction: row;
  min-height: 76px;
  border: 1px solid ${({ theme: t }) => t.colors.color_neutral_30};
  border-radius: 8px;
  padding: 16px;
`;

export const Content = styled.View<{ widthSize?: number }>`
  align-self: center;
  justify-content: space-between;
  width: ${({ widthSize }) => widthSize}%;
`;

export const Label = styled.Text<{ first?: boolean }>`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  margin-bottom: 8px;
  font-family: ${({ theme: t }) => t.fonts.Satoshi.bold};
  color: ${({ theme: t }) => t.colors.color_neutral_100};
`;

export const ChangeContactText = styled.Text`
  font-family: ${({ theme: t }) => t.fonts.Satoshi.light};
  font-size: 14px;
  color: ${({ theme: t }) => t.colors.color_neutral_100};
`;

export const ChangeContactTexBold = styled.Text`
  font-weight: 700;
  font-family: ${({ theme: t }) => t.fonts.Satoshi.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  color: ${({ theme: t }) => t.colors.color_neutral_100};
`;

export const ContactButton = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${({ theme: t }) => t.colors.color_neutral_100};
  background-color: ${({ theme: t }) => t.colors.color_neutral_0};
  height: 32px;
  padding: 4px 8px;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `};
`;

export const ContactButtonText = styled.Text`
  color: ${({ theme: t }) => t.colors.color_neutral_100};
  font-family: ${({ theme: t }) => t.fonts.Satoshi.medium};
  font-size: 12px;
`;

export const TextInput = styled.TextInput`
  border: 1px solid ${({ theme: t }) => t.colors.color_neutral_30};
  height: ${RFPercentage(6)}px;
  border-radius: 8px;
  padding-left: 8px;
  color: ${({ theme: t }) => t.colors.color_neutral_80};
  z-index: 0;
  width: ${RFPercentage(30)}px;
`;

export const TextInputMask = styled(inputMask)<{ isFocused: boolean }>`
  height: ${RFPercentage(6)}px;
  padding-left: 8px;
  color: ${({ theme: t }) => t.colors.color_neutral_80};
  z-index: 0;
  width: ${RFPercentage(23)}px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme: t }) => t.colors.color_blue_40};
    `};
`;

export const DropDownView = styled.View``;

export const InputContainer = styled.View`
  border: 1px solid ${({ theme: t }) => t.colors.color_neutral_30};
  border-radius: 8px;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  gap: 10px;
`;

export const AlertContainer = styled.View`
  background-color: ${({ theme: t }) => t.colors.color_neutral_10};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 8px;
  margin: 10px 0;
  border-radius: 8px;
`;
export const BtnClose = styled(TouchableOpacity)``;
export const WrapperHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
