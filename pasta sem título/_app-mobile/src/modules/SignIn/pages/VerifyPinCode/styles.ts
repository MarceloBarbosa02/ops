import { Platform, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;
export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  width: 100%;
  margin-top: 96px;
`;

export const ContainerInput = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  width: 100%;
`;

export const Form = styled.View`
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 18px;
  margin-top: 48px;
  width: 100%;
  border: 1px;
  border-radius: 16px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;

export const Content = styled.View`
  width: 100%;
`;

export const BtnHeader = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 4px;
  flex-direction: row;
`;

export const TitleHeader = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_blue_40};
`;

export const ImgLogo = styled.Image`
  height: 36px;
  width: 200px;
`;

export const WrapperHeader = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: 3px;
  gap: 4px;
  width: 100%;
  border-bottom-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
`;

export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ color: string }>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ color }) => color};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
  text-align: center;
`;
export const WrapperResend = styled.View`
  width: 100%;
`;
export const BtnBack = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
`;
export const DescriptionBack = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ color: string }>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ color }) => color};
`;
export const BtnResend = styled(TouchableOpacity)`
  width: 100%;
`;
