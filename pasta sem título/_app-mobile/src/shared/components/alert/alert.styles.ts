import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background_card_alert};
`;
export const TitleText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.color_buttons.secondary_text_solid};
`;

export const WrapperInfo = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray_l100_d800};
`;
export const TitleTextInfo = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
  width: 90%;
`;
export const TitleBold = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
`;
export const TitleBoldConfig = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.blue_l600_d300};
`;
