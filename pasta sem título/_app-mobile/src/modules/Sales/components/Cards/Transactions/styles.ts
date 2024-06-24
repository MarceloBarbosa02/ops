import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  padding: 0 ${RFPercentage(2)}px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
`;
export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const LabelLink = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_blue_40};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperBtnCopy = styled(TouchableOpacity)`
  padding: 6px;
  border: 2px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.color_blue_40};
`;

export const WrapperLink = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperTable = styled.View`
  width: 100%;
  align-items: center;
  border: 1px;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.colors.color_blue_20};
`;

export const WrapperTableHeader = styled.View`
  width: 100%;
  padding: 16px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.color_blue_20};
`;

export const WrapperTableLine = styled.View<{ last?: boolean }>`
  width: 100%;
  padding: 8px 16px;
  border-bottom-width: ${({ last }) => (last ? 0 : 1)}px;
  border-color: ${({ theme }) => theme.colors.color_blue_20};
`;
