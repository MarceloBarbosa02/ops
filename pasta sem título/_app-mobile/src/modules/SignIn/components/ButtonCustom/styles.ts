import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled(TouchableOpacity)`
  width: 100%;
  padding: 16px 24px;
  align-items: center;
  justify-content: space-between;

  border: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
  border-radius: 8px;
  flex-direction: row;
`;

export const Info = styled.View`
  gap: 12px;
  flex-direction: row;
  align-items: center;
`;

export const InfoIcon = styled.View`
  padding: 8px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.color_neutral_20};
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_blue_40};
`;
