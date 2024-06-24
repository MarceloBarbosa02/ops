import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const WrapperIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
`;

export const WrapperHeaderIcon = styled.View`
  width: 100%;
  height: 40px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperTitle = styled.View`
  width: 100%;
  padding: 16px;
  gap: 8px;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.largeX}px;
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;

export const Container = styled.View`
  flex: 1;
`;

export const WrapperFooter = styled.View`
  margin-top: 4px;
  margin-bottom: 24px;
  padding: 10px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

export const TitleProduct = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;

export const WrapperBtnClose = styled(TouchableOpacity)``;

export const WrapperButton = styled(TouchableOpacity)<{ cancel?: boolean }>`
  padding: 12px 6px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.color_green_40};

  ${({ cancel }) =>
    cancel &&
    css`
      background-color: transparent;
    `}
`;
export const WrapperButtonText = styled.Text<{ cancel?: boolean }>`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.color_buttons.primary_text_solid};

  ${({ cancel, theme }) =>
    cancel &&
    css`
      color: ${theme.colors.color_neutral_90};
    `}
`;
