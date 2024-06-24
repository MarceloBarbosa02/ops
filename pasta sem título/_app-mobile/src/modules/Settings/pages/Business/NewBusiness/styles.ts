import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowHeight = Dimensions.get("window").height;

export const Container = styled.View`
  padding: 0 ${RFPercentage(3)}px;
  height: 85%;
  justify-content: space-between;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: column;
  align-self: center;
  padding: 8px 0;
`;

export const Text = styled.Text`
  font-family: ${({ theme: t }) => t.fonts.Satoshi.light};
  font-size: 16px;
`;
