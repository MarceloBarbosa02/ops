import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  padding: ${RFPercentage(3)}px;
  margin-bottom: ${RFPercentage(6)}px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const WrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const WrapperIcon = styled.View`
  padding: 12px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;
export const BtnEdit = styled(TouchableOpacity)`
  padding: 12px;
  border: 2px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_blue_40};

  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${({ theme }) => theme.colors.color_blue_20};
    `};
`;
