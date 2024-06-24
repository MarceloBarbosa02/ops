import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})``;
export const BtnBack = styled.TouchableOpacity`
  width: 45px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
