import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;
export const Container = styled.SafeAreaView`
  align-items: center;
`;
