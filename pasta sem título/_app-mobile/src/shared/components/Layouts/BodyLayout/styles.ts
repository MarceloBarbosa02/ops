import { Platform } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  padding: ${Platform.OS === "ios" ? 36 : 0}px 0 0;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;
