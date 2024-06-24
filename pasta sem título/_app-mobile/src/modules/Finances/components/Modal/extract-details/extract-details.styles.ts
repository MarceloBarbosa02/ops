import { Platform, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  margin-top: 24px;
`;
export const WrapperButton = styled.View`
  padding: 0 ${RFPercentage(2)}px;
`;

export const WrapperTitle = styled.View`
  width: 100%;
  padding: 0 24px 16px;
  /* border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_l100_d800}; */
`;
export const WrapperIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_l200_d700};
`;
export const WrapperHeaderIcon = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperBtnClose = styled(TouchableOpacity)``;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  gap: 16px;
  padding: 16px 24px ${RFPercentage(6)}px;
`;

export const WrapperItems = styled.View`
  gap: 8px;
`;
export const WrapperCard = styled.View`
  margin-top: 16px;
  padding: 16px;
  gap: 8px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
  background-color: ${({ theme }) => theme.colors.gray_l100_d800};
`;

export const WrapperProducts = styled.View`
  flex: 1;
  /* height: auto; */
  /* height: 200px; */
  margin-bottom: 16px;
  padding: 0 0 12px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_l100_d800};
`;

export const WrapperProductsHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const DescriptionCard = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l500_d400};
  line-height: 24px;
`;

export const WrapperReason = styled.View`
  width: 100%;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.gray_l50_d900};
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
`;

export const WrapperItem = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LabelItem = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l500_d400};
  line-height: 24px;
`;

export const TitleItem = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.gray_l500_d400};
  line-height: 24px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
  line-height: 24px;
`;

export const ProductsText = styled.Text`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
`;

export const ProductsQuantityText = styled.Text`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l600_d300};
`;

export const TitleCard = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const DescriptionBoldCard = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
  line-height: 24px;
`;

export const WrapperCardReason = styled.View`
  width: 100%;
  padding: 16px;
  gap: 4px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray_l50_d900};
`;
export const DescriptionReasonCard = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
  line-height: 24px;
`;
