import { TextInput } from "react-native";
import { Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const windowHeight = Dimensions.get("window").height;

export const Wrapper = styled.View`
  padding-bottom: 120px;
`;
export const Title = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  margin-bottom: -10px;
`;
export const Content = styled.View`
  margin-bottom: 24px;
`;
export const Label = styled.Text`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const Container = styled.View`
  padding: 0 24px;
`;
export const Spacer = styled.View`
  padding: 0 24px;
`;
export const Input = styled(TextInput)`
  border: 1px solid ${({ theme: t }) => t.colors.color_neutral_20};
  border-radius: 4px;
  height: 48px;
  padding: 0 8px;
  color: ${({ theme: t }) => t.colors.color_neutral_90};
`;
