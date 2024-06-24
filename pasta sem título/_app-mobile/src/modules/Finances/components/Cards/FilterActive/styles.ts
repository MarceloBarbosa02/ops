import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  padding: 8px ${RFPercentage(2.6)}px;
  align-items: center;
  justify-content: center;
`;
export const WrapperFiltersActive = styled.ScrollView``;
export const WrapperAct = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: ${RFPercentage(7.5)}px;
`;
export const WrapperActive = styled.View`
  margin-right: 8px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
export const ActText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  width: 20%;
`;
export const ActiveText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumS}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  text-align: center;
`;
export const BtnActiveClear = styled.TouchableOpacity`
  height: 46px;
  padding: 12px;
  align-items: center;
  justify-content: center;
`;
export const ActClearText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumS}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_blue_40};
`;
export const WrapperBtnClear = styled(TouchableOpacity)``;
