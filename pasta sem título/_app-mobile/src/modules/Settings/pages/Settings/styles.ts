import { responsiveFontSize } from "@shared/utils/dimensions";
import { Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const windowHeight = Dimensions.get("window").height;

export const Wrapper = styled.View`
  height: 100%;
  padding: 0 ${RFPercentage(3)}px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})``;
export const Spacer = styled.View`
  width: 100%;
  height: 56px;
`;
