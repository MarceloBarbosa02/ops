import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  Dimensions,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const Container = styled.View`
  flex: 1;
  gap: 12px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  padding: 16px;
  gap: 16px;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;

export const WrapperFooter = styled.View`
  width: 100%;
  padding: 16px;
  gap: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
`;

export const WrapperTitle = styled.View`
  width: 100%;
  padding: 16px;
  gap: 8px;
`;
export const HeaderTitle = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.largeX}px;
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;
export const WrapperBtnClose = styled(TouchableOpacity)``;
export const WrapperHeaderIcon = styled.View`
  width: 100%;
  height: 40px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
`;
