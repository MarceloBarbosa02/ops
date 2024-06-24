import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";

export const Wrapper = styled.View`
  max-height: 80%;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
  padding: 24px;
  overflow: hidden;
`;
export const Title = styled.Text``;
export const SelectText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const TextItem = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const ImageBtn = styled(Image)`
  width: 25px;
  height: 16px;
`;
export const Select = styled(TouchableOpacity)`
  flex-direction: row;
  gap: 12px;
  align-items: center;
  padding: 4px;
  border-bottom-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
`;
export const WrapperBtnClose = styled(TouchableOpacity)``;
export const WrapperHeader = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-top: -15px;
`;
