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

export const Form = styled.View`
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 28px;
  margin-top: 48px;
  width: 100%;
  border: 1px;
  border-radius: 16px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;

export const Content = styled.View`
  width: 100%;
  gap: 24px;
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
export const WrapperEmail = styled.View`
  width: 100%;
  margin: 16px 0 4px;
  flex-direction: row;
  padding: 8px 12px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
  border: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;
export const WrapperInfo = styled.View`
  gap: 8px;
  width: 80%;
`;
export const WrapperLabel = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const TitleEmail = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const TitleBtn = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_blue_40};
`;
export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 12px 0;
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_70};
  text-align: center;
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
