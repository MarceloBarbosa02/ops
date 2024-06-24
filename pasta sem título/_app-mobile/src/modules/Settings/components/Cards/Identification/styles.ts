import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  padding: 0 ${RFPercentage(3)}px;
  gap: 8px;
`;
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_80};
  margin-bottom: 8px;
`;

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(110)}px;
  z-index: 9999;
  position: absolute;
  top: 0;
  left: ${RFPercentage(3)}px;
  gap: 8px;
  padding: ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(3)}px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
  background-color: transparent;
`;

export const FieldContainer = styled.View<{ width?: number }>`
  width: 100%;
  z-index: 0;
  gap: 8px;
  padding: ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(3)}px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;

export const WrapperButton = styled.View<{ width?: number }>`
  width: 100%;
`;

export const Label = styled.Text<{ first?: boolean }>`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
  margin: 0 0 4px;
`;

export const LabelSelect = styled.Text<{ isSelect?: boolean }>`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_60};

  ${({ isSelect }) =>
    isSelect &&
    css`
      color: ${({ theme }) => theme.colors.color_neutral_40};
    `}
`;

export const RowFieldContainer = styled.View<{ heightTop?: number }>`
  gap: 12px;
  flex-direction: row;
  align-items: center;
  width: 100%;

  ${({ heightTop: value }) =>
    value &&
    css`
      margin-top: ${value}px;
    `}
`;

export const SelectButton = styled.TouchableOpacity<{ active: boolean }>`
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
  padding: ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${({ active }) =>
    active &&
    css`
      border-color: ${({ theme }) => theme.colors.color_blue_40};
    `}
`;

export const Error = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  margin: 0 8px -8px;
  font-size: 12px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_red_40};
`;
