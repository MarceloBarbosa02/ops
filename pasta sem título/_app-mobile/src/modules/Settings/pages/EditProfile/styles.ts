import styled, { css } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { TextInputMask as inputMask } from "react-native-masked-text";
import { Text } from "react-native";

import { Dimensions } from "react-native";
import { responsiveFontSize } from "@shared/utils/dimensions";

const windowHeight = Dimensions.get("screen").height;

export const Container = styled.ScrollView``;

export const Wrapper = styled.View`
  height: 97%;
`;

export const ContentIdentity = styled.View`
  margin-top: ${RFPercentage(2)}px;
  margin-left: ${RFPercentage(2.7)}px;
  margin-right: ${RFPercentage(2.7)}px;
  margin-bottom: ${RFPercentage(2)}px;
`;

export const TextInput = styled.TextInput`
  border: 1px solid ${({ theme: t }) => t.colors.color_neutral_30};
  height: ${RFPercentage(6)}px;
  border-radius: 8px;
  padding-left: 8px;
  color: ${({ theme: t }) => t.colors.color_neutral_80};
  font-family: ${({ theme: t }) => t.fonts.Satoshi.regular};
  z-index: 0;
`;

export const TextInputMask = styled(inputMask)`
  border: 1px solid ${({ theme: t }) => t.colors.color_neutral_30};
  height: ${RFPercentage(6)}px;
  border-radius: 8px;
  padding-left: 8px;
  color: ${({ theme: t }) => t.colors.color_neutral_80};
  z-index: 0;
`;

export const ContentAddress = styled.View`
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
  padding: 36px 0 24px;
`;

export const FieldContainer = styled.View<{ width?: string }>`
  margin: 8px 0;
  flex-direction: column;
  ${({ width: value }) =>
    value &&
    css`
      width: ${value};
    `}
  z-index: 0;
`;

export const Label = styled.Text<{ first?: boolean }>`
  font-size: 16px;

  ${({ first }) =>
    first
      ? css`
          font-family: ${({ theme: t }) => t.fonts.Satoshi.bold};
          color: ${({ theme: t }) => t.colors.color_neutral_90};
          margin: 0 24px 24px;
        `
      : css`
          color: ${({ theme: t }) => t.colors.color_neutral_80};
          font-family: ${({ theme: t }) => t.fonts.Satoshi.regular};
        `}
  z-index: 0;
`;

export const RowFieldContainer = styled.View`
  justify-content: space-between;
  gap: 12px;
  align-self: center;
  flex-direction: row;
  height: 80px;
  margin-bottom: 8px;
`;

export const ChangeContactButton = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${({ theme: t }) => t.colors.color_neutral_100};
  background-color: ${({ theme: t }) => t.colors.color_neutral_0};
  height: 32px;
  padding: 4px 8px;
`;

export const ChangeContactButtonText = styled.Text`
  color: ${({ theme: t }) => t.colors.color_neutral_100};
  font-family: ${({ theme: t }) => t.fonts.Satoshi.medium};
  font-size: 12px;
`;

export const PhotoProfileArea = styled.View`
  align-items: center;
  padding: 24px 0;
`;

export const PhotoProfile = styled.Image`
  width: ${RFPercentage(13)}px;
  height: ${RFPercentage(13)}px;
`;

export const WrapperAvatar = styled.View`
  width: ${RFPercentage(13)}px;
  height: ${RFPercentage(13)}px;
  align-items: center;
  justify-content: center;
  border-radius: 200px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.color_neutral_100};
`;

export const TitleAvatar = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.largeX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_0};
`;
export const WrapperLoading = styled.View`
  width: 100%;
  height: ${RFPercentage(110)}px;
  z-index: 9999;
  position: absolute;
  top: 0;
  left: ${RFPercentage(3)}px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
  opacity: 0.2;
`;

export const WrapperLine = styled.View`
  width: 100%;
  margin-bottom: 12px;
  padding: 12px ${RFPercentage(3)}px;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.color_neutral_30};
`;
