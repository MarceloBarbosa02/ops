import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  gap: 8px;
  border: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
`;
export const WrapperItems = styled.View`
  width: 100%;
  gap: 8px;
  padding: 16px 16px 0;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const BtnShow = styled(TouchableOpacity)`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
export const WrapperFooter = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
  padding: 8px;
  align-items: center;
`;
