import styled, { css } from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const Wrapper = styled.View`
  width: 100%;
  padding: 16px 0;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_blue_70};
`;
export const WrapperInput = styled.View`
  width: 100%;
  padding: 12px 16px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
  flex-direction: row;
  align-items: center;
`;
export const Input = styled(TextInputMask)`
  flex: 1;
  padding: 0 8px;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const IconContainer = styled.View``;
export const BtnIcon = styled.TouchableOpacity``;
export const Error = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  margin-bottom: -8px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_red_40};
`;
