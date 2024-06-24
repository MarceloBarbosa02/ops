import { ImageBackground, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.largeS}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  text-align: center;
`;
export const Items = styled.View`
  padding: 24px;
  gap: 16px;
`;
export const ItemsLoading = styled.View`
  padding: 24px 48px;
  gap: 16px;
`;
export const WrapperHeader = styled.View`
  width: 100%;
  gap: 36px;
  align-items: center;
  justify-content: center;
`;
export const WrapperFooter = styled.View`
  width: 100%;
  padding: 16px 24px;
  align-items: center;
  gap: 16px;
`;
export const WrapperButton = styled.View`
  width: 100%;
  height: 48px;
`;
export const WrapperContent = styled.View`
  width: 100%;
  padding: 42px 24px 24px;
  align-items: center;
  justify-content: space-between;
`;
export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 42px 24px 24px;
  align-items: center;
  justify-content: space-between;
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  text-align: center;
`;
export const BtnLink = styled(TouchableOpacity)`
  margin-top: -3px;
`;
export const DescriptionLink = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_blue_40};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.color_blue_40};
`;
export const WrapperInfo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
`;
export const WrapperFlag = styled.View`
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 2px 8px;
  border: 1px;
  border-radius: 4px;
  border-style: dashed;
`;
export const FlagText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const BtnFlag = styled.View`
  width: 100%;
  height: 48px;
`;
export const ImgPreview = styled(ImageBackground)`
  width: 100%;
  height: 560px;
`;
