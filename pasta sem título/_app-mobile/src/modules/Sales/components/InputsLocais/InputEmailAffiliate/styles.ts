import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  gap: 4px;
  padding: 16px;
`;
export const WrapperInputEmail = styled.View<{ color: string }>`
  width: 100%;
  border: 1px;
  padding: 4px;
  border-radius: 6px;
  border-color: ${({ color }) => color};
`;
export const InputEmail = styled(TextInput)`
  width: 100%;
  height: 36px;
  padding: 8px;
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const Error = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  color: ${({ theme }) => theme.colors.color_red_40};
`;
export const LabelEmail = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  color: ${({ theme }) => theme.colors.gray_l800_d100};
`;
