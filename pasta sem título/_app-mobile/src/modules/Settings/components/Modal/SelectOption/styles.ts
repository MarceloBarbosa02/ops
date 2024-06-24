import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  max-height: 450px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const Spacer = styled.View`
  height: 70px;
`;

export const WrapperHeader = styled.View`
  width: 100%;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_10};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;
export const TitleSelect = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ select: boolean }>`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_60};

  ${({ select }) =>
    select &&
    css`
      color: ${({ theme }) => theme.colors.color_neutral_90};
    `}
`;
export const ButtonSelect = styled(TouchableOpacity)`
  padding: 8px 12px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_10};
  gap: 8px;
  flex-direction: row;
`;
