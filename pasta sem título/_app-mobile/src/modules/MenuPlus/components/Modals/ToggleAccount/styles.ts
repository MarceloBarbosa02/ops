import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  padding: 12px 24px 48px;
`;

export const WrapperItems = styled.View`
  gap: 8px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const WrapperBtnClose = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;
export const WrapperHeader = styled.View`
  width: 100%;
  padding: 12px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
