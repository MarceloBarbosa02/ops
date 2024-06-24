import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

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
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
  padding: 24px;
  overflow: hidden;
`;
export const WrapperBtn = styled.View`
  height: 48px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperSelects = styled.View`
  width: 100%;
  margin: 12px 0;
  gap: 8px;
  flex-wrap: wrap;
  flex-direction: row;
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
export const ItemSelects = styled.View<{ active: number }>`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};

  ${({ active }) =>
    active === 0 &&
    css`
      border-top-width: 0;
    `}
`;

export const WrapperHeaderCalendar = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const TitleCalendar = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  text-align: center;
`;
export const WrapperArrows = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ButtonSelect = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border: 0.6px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray_l200_d700};
`;
export const ButtonSelectText = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.blue_l600_d300};
`;
