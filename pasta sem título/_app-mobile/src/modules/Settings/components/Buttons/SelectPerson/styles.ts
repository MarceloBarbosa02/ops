import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  padding: ${RFPercentage(3)}px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
`;

export const Content = styled.View`
  margin-top: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Label = styled.Text<{ font?: string }>`
  font-weight: 700;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme: t }) => t.fonts.Satoshi.medium};
  color: ${({ theme: t }) => t.colors.color_neutral_90};
`;

export const Text = styled.Text`
  font-family: ${({ theme: t }) => t.fonts.Satoshi.light};
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme: t }) => t.colors.color_neutral_90};
`;

export const WrapperDot = styled.View<{ isActive: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_60};
  align-items: center;
  justify-content: center;

  ${({ isActive }) =>
    isActive &&
    css`
      border-color: ${({ theme }) => theme.colors.color_blue_40};
    `};
`;

export const Dot = styled.View`
  background-color: ${({ theme }) => theme.colors.color_blue_40};
  width: 8px;
  height: 8px;
  border-radius: 15px;
`;

export const SelectButton = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme: t }) => t.colors.color_neutral_20};
  border-radius: 4px;
  flex-direction: row;
  gap: 12px;
`;

export const TextSelectButton = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme: t }) => t.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
