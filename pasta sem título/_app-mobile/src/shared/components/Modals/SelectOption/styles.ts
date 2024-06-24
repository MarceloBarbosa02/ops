import { ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  width: 100%;
  max-height: ${RFPercentage(50)}px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.large}px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const SubTitle = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;

export const Container = styled.View`
  width: 100%;
  padding: 0 ${RFPercentage(3)}px;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.View`
  border-radius: ${RFPercentage(3)}px;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
  padding: ${RFPercentage(3)}px;
  overflow: hidden;
`;

export const ContainerButton = styled.View`
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
  border: 1px;
  border-radius: 4px;
  padding: 12px 16px;
  align-items: center;
  justify-content: center;
`;
export const ContainerButtons = styled.View`
  margin-top: 16px;
  gap: 8px;
`;
export const WrapperIcon = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ContainerTop = styled.View`
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  /* padding: 0 16px 16px; */
  position: relative;
  gap: 24px;
`;

export const BtnSelect = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
  padding: ${RFPercentage(1.6)}px;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  color: ${({ theme }) => theme.colors.color_neutral_60};
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
`;
