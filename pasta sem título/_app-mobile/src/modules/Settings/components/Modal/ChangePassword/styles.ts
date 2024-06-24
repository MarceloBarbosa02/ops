import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  margin-bottom: 36px;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const WrapperInputs = styled.View`
  width: 100%;
  padding: 16px 0 104px;
`;

export const Input = styled.View`
  height: 100px;
  padding: 16px 24px;
`;

export const WrapperHeader = styled.View`
  width: 100%;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
  text-align: center;
  margin-top: 16px;
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
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
  gap: 8px;
  flex-direction: row;
`;
