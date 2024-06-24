import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  margin-top: ${RFPercentage(4)}px;
  gap: 16px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;
export const WrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;
export const Container = styled.View`
  padding: ${RFPercentage(2)}px;
  gap: 16px;
`;
export const WrapperItems = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_70};
  width: 28%;
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
  width: 68%;
`;
export const BtnEdit = styled(TouchableOpacity)`
  margin-top: ${RFPercentage(2)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 8px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
`;
export const TextButton = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const WrapperBadge = styled.View`
  padding: 4px 8px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_blue_40};
`;
export const TextBadge = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_blue_40};
`;
export const TextSwitch = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_70};
  margin-left: 4px;
`;
export const BtnUpdate = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;
export const WrapperInfo = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;
