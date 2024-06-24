import styled from "styled-components/native";
import { Image } from "react-native";

export const WrapperDropdon = styled.View<{ topSize: number }>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
  width: 30%;
  top: ${({ topSize }) => topSize}px;
  left: 12%;
  max-height: 300px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;
export const WrapperBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  z-index: 1000;
`;
export const SelectText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const TextItem = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: 12px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const ImageBtn = styled(Image)`
  width: 25px;
  height: 16px;
`;
export const Select = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
`;
export const SelectDefault = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
