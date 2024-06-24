import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;
  margin: 0 0 16px;
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
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  width: ${({ widthSize }) => widthSize}%;
`;

export const Label = styled.Text<{ first?: boolean }>`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  margin-bottom: 8px;
  font-family: ${({ theme: t }) => t.fonts.Satoshi.bold};
  color: ${({ theme: t }) => t.colors.color_neutral_90};
`;

export const ContactText = styled.Text`
  font-family: ${({ theme: t }) => t.fonts.Satoshi.light};
  font-size: 14px;
  color: ${({ theme: t }) => t.colors.color_neutral_90};
`;

export const ContactButton = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${({ theme: t }) => t.colors.color_neutral_100};
  background-color: ${({ theme: t }) => t.colors.color_neutral_0};
  padding: 8px;
`;

export const ContactButtonText = styled.Text`
  color: ${({ theme: t }) => t.colors.color_neutral_100};
  font-family: ${({ theme: t }) => t.fonts.Satoshi.medium};
  font-size: 12px;
`;

export const BtnClose = styled(TouchableOpacity)``;
export const WrapperHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
