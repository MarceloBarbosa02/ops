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
  margin-top: 42px;
`;
export const Form = styled.View`
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 10px;
  margin-top: 36px;
  width: 100%;
  border: 1px;
  border-radius: 16px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_blue_80};
`;

export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  text-align: center;
  line-height: 24px;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_70};
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
  border-bottom-color: ${({ theme }) => theme.colors.color_neutral_30};
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
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_blue_40};
`;
export const Dot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const Content = styled.View`
  border: 1px;
  border-style: dashed;
  padding: 16px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.color_neutral_40};
`;

export const Info = styled.View`
  gap: 4px;
  margin: 2px 0;
  align-items: center;
  flex-direction: row;
`;
export const TitleCard = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  margin-bottom: 2px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_blue_40};
`;
export const DescriptionCard = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
