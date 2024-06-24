import { TextInputMask } from "react-native-masked-text";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  gap: 8px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.menu_gray};
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
  gap: 16px;
`;
export const WrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l600_d300};
`;
export const BtnDescription = styled.TouchableOpacity``;
export const DescriptionBold = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  margin-bottom: -4px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_blue_40};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.color_blue_40};
`;

export const Container = styled.View<{
  active: boolean;
  isFocused: boolean;
}>`
  width: 100%;
  gap: 8px;
  border: 1px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
  padding: ${RFPercentage(1.4)}px ${RFPercentage(2)}px;

  ${({ active }) =>
    active &&
    css`
      border-color: ${({ theme }) => theme.colors.color_red_40};
      background-color: ${({ theme }) => theme.colors.color_red_10};
    `};

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.color_blue_40};
    `};
`;
export const WrapperInput = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;
export const Input = styled(TextInputMask)`
  flex: 1;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
`;
export const LabelInput = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
`;
export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.gray_l500_d400};
`;
export const WrapperWithdrawal = styled.View`
  width: 100%;
  height: ${RFPercentage(9)}px;
`;
