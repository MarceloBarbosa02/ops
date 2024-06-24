import { Dimensions } from "react-native";
import { Platform } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: ${Platform.OS === "ios" ? 0 : 32}px 0;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const Container = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;
