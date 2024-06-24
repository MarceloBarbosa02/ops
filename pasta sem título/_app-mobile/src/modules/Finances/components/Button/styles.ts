import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled(TouchableOpacity)`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
`;

export const WrapperExport = styled(TouchableOpacity)`
  gap: 4px;
  padding: 4px 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
    `}
`;

export const TitleExport = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.blue_l600_d300};
`;

export const WrapperCalendar = styled.View`
  padding: 16px 16px 0;
  gap: 4px;
`;
export const WrapperInputCalendar = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const WrapperBtnClear = styled(TouchableOpacity)``;
export const WrapperBtnCalendar = styled(TouchableOpacity)<{
  isActive: boolean;
}>`
  padding: ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border: 0.7px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-color: ${theme.colors.blue_l400_d500};
    `};
`;
export const TextBtnCalendar = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const TitleCalendar = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  color: ${({ theme }) => theme.colors.gray_l800_d100};
`;
