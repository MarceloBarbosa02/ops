import { TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 16px;
  padding: 16px ${RFPercentage(2.6)}px 8px;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperInputEmail = styled.View<{ color: string }>`
  width: 78%;
  height: 48px;
  border: 1px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  border-color: ${({ color }) => color};
`;
export const InputEmail = styled(TextInput)`
  width: 90%;
  padding: 0 8px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;

export const WrapperDot = styled.View`
  position: absolute;
  z-index: 99999;
  right: 4px;
  top: -9px;
  width: 24px;
  height: 24px;
  gap: 16px;
  padding: 4px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.color_blue_40};
`;
export const TextDot = styled.Text`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_0};
`;
