import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View<{ active: boolean; color: string }>`
  width: 100%;
  background-color: ${({ color }) => color};
  flex-direction: row;
  align-items: center;
  padding: 0;
  opacity: 0;
  gap: 8px;

  ${({ active }) =>
    active &&
    css`
      padding: 16px;
      opacity: 1;
    `};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.color_buttons.secondary_text_link};
  width: 90%;
`;
export const TitleBold = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.color_buttons.secondary_text_link};
`;
export const TitleEmphasis = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.color_buttons.primary_default};
`;
export const ButtonHeader = styled(TouchableOpacity)`
  flex: 1;
`;
export const WrapperIcon = styled.View<{ color: string }>`
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`;
export const ButtonClose = styled(TouchableOpacity)`
  position: absolute;
  right: 16px;
  top: 12px;
  z-index: 99999;
  width: 24px;
  height: 24px;
`;
