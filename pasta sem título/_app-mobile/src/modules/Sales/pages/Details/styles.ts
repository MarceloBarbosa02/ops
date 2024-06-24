import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  gap: 16px;
  padding: 0 0 16px;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;
export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const WrapperInfo = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const WrapperHeaderIcon = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperTitle = styled.View`
  gap: 8px;
  padding: ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const Line = styled.View`
  width: 92%;
  align-self: center;
  height: 1px;
  margin: 24px 0;
  background-color: ${({ theme }) => theme.colors.gray_l300_d600};
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.colors.gray_l500_d400};
`;
export const TitleCode = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.colors.gray_l800_d100};
`;
export const WrapperBtnClose = styled(TouchableOpacity)``;
export const WrapperBtnCopy = styled(TouchableOpacity)``;
