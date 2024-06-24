import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View``;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  text-align: center;
`;
export const Content = styled.View`
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
  padding: 24px;
  overflow: hidden;
`;
export const WrapperBtn = styled.View`
  height: 48px;
  width: 100%;
`;
export const WrapperSelects = styled.View`
  width: 100%;
  padding: 12px 0;
`;
export const WrapperBtnClose = styled(TouchableOpacity)`
  position: absolute;
  right: 0;
  top: 4px;
`;
export const WrapperHeader = styled.View`
  width: 100%;
  align-items: center;
  position: relative;
`;
export const ItemSelects = styled.View`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  margin-bottom: 4px;
  border: 0.7px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;
