import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type Props = {
  tx?: boolean;
  withdrawal?: boolean;
};

export const Wrapper = styled.View``;

export const WrapperTitle = styled.View`
  width: 100%;
  padding: 24px 24px 16px;
  /* border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600}; */
`;

export const Container = styled.View`
  width: 100%;
  padding: 0 24px 24px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
`;
export const WrapperItems = styled.View`
  margin: 16px 0;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
`;
export const ItemLabel = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
`;
export const ItemValue = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<Props>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l900_d50};

  ${({ withdrawal }) =>
    withdrawal &&
    css`
      color: ${({ theme }) => theme.colors.green_l600_d300};
    `};

  ${({ tx }) =>
    tx &&
    css`
      color: ${({ theme }) => theme.colors.gray_l500_d400};
    `};
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const WrapperCard = styled.View`
  margin-top: ${RFPercentage(20)}px;
  margin-bottom: ${RFPercentage(4)}px;
  padding: 16px;
  gap: 12px;
  border: 1px;
  flex-direction: row;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.gray_l100_d800};
  background-color: ${({ theme }) => theme.colors.gray_l100_d800};
`;
export const DescriptionCard = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
  line-height: 24px;
  width: 85%;
`;
export const DescriptionTop = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l500_d400};
  line-height: 24px;
`;

export const WrapperInfo = styled.View`
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;
export const Item = styled.View<{ not?: boolean }>`
  padding: 12px 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};

  ${({ not }) =>
    not &&
    css`
      border-bottom-width: 0;
      background-color: ${({ theme }) => theme.colors.menu_gray};
    `};
`;

export const TitleCard = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;

export const WrapperFooter = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;
export const WrapperIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
`;

export const WrapperHeaderIcon = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperBtn = styled.View`
  height: 56px;
`;
export const WrapperBtnClose = styled(TouchableOpacity)``;

export const WrapperTooltipIcon = styled.View`
  padding: 6px 0;
`;
export const TitleTooltip = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  color: ${({ theme }) => theme.color_buttons.bg_outlined};
  width: 90%;
  text-align: center;
`;
