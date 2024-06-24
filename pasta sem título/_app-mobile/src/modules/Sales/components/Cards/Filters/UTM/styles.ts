import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  padding: 8px 16px;
`;
export const WrapperUTM = styled.View`
  margin-top: 12px;
  border: 1px;
  border-radius: 12px;
  overflow: hidden;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;
export const WrapperHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const BtnAll = styled(TouchableOpacity)``;
export const AllText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  color: ${({ theme }) => theme.colors.color_blue_40};
`;
