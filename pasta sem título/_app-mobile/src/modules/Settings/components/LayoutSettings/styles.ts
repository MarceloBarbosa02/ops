import styled from "styled-components/native";
import { Image, Platform } from "react-native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;
export const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  padding: ${Platform.OS === "ios" ? 0 : 24}px 0 0;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;
