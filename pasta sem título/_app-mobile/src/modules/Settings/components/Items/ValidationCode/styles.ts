import styled, { css } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin: 6px 0;
  flex-direction: row;
  align-self: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

export const Content = styled.View`
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  gap: 8px;
`;
export const ContentInput = styled.View`
  width: 100%;
  align-self: flex-start;
`;
export const WrapperInput = styled.View`
  width: 100%;
  align-self: center;
  justify-content: center;
`;
export const WrapperLabel = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  gap: 4px;
  margin-bottom: -8px;
`;

export const inputCode = styled.TextInput<{ error?: boolean }>`
  width: ${RFPercentage(5)}px;
  height: ${RFPercentage(6)}px;
  ${({ error }) =>
    error
      ? css`
          border: 1px solid ${({ theme: t }) => t.colors.color_red_40};
        `
      : css`
          border: 1px solid ${({ theme: t }) => t.colors.color_blue_40};
        `};

  border-radius: 8px;
  text-align: center;

  color: ${({ theme: t }) => t.colors.color_neutral_100};
  font-family: ${({ theme: t }) => t.fonts.Satoshi.bold};
  font-size: 16px;
`;

export const ButtonVerifyCode = styled.TouchableOpacity`
  width: 75%;
  background-color: ${({ theme }) => theme.colors.color_neutral_100};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: ${RFPercentage(2)}px;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.color_neutral_40};
    `};
`;

export const TextVerifyCode = styled.Text`
  color: ${({ theme: t }) => t.colors.color_neutral_0};
  font-family: ${({ theme: t }) => t.fonts.Satoshi.bold};
  font-size: 15px;
`;

export const Label = styled.Text<{ verify?: boolean; error?: boolean }>`
  font-family: ${({ theme: t }) => t.fonts.Satoshi.light};
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;

  ${({ verify }) =>
    !verify &&
    css`
      margin-bottom: 8px;
    `}

  ${({ verify, error }) =>
    verify &&
    !error &&
    css`
      color: ${({ theme: t }) => t.colors.color_blue_40};
    `}
  ${({ verify, error }) =>
    !verify &&
    !error &&
    css`
      color: ${({ theme: t }) => t.colors.color_neutral_90};
    `}
  ${({ error }) =>
    error &&
    css`
      color: ${({ theme: t }) => t.colors.color_red_40};
    `}
`;

export const ResendCodeButton = styled.TouchableOpacity``;

export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ color: string }>`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ color }) => color};
`;
export const WrapperResend = styled.View`
  width: 100%;
  padding: 8px 0;
`;
export const ChangeContactTexBold = styled.Text`
  font-weight: 700;
  font-family: ${({ theme: t }) => t.fonts.Satoshi.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  color: ${({ theme: t }) => t.colors.color_neutral_100};
`;
