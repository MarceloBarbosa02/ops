import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 75%;
  gap: 4px;
  padding: 16px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})``;
export const WrapperInputUTM = styled.View<{ color: string }>`
  width: 100%;
  border: 1px;
  padding: 4px;
  border-radius: 6px;
  border-color: ${({ color }) => color};
`;
export const InputUTM = styled(TextInput)`
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
export const LabelUTM = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;
