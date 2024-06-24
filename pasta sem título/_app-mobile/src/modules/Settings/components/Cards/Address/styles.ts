import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
  isErrored?: boolean;
  active: boolean;
}

export const Wrapper = styled.View`
  width: 100%;
  padding: 0 ${RFPercentage(3)}px ${RFPercentage(2)}px;
  gap: 8px;
  margin-top: 12px;
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

export const Label = styled.Text<{ first?: boolean }>`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_60};
  margin: 4px;
`;

export const WrapperSelect = styled.View`
  width: 100%;
`;

export const LabelSelect = styled.Text<{ first?: boolean }>`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_80};
`;

export const RowFieldContainer = styled.View<{ heightTop?: number }>`
  gap: 12px;
  flex-direction: row;

  ${({ heightTop: value }) =>
    value &&
    css`
      margin-top: ${value}px;
    `}
`;

export const SelectButton = styled.TouchableOpacity<Props>`
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
  padding: ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ active }) =>
    active &&
    css`
      border-color: ${({ theme }) => theme.colors.color_blue_40};
    `}

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.color_red_40};
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
