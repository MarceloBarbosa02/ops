import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px;
  border-radius: 8px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.colors.color_neutral_60};
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
`;
export const Container = styled.View`
  width: 100%;
  min-height: 200px;
  padding: 0 ${RFPercentage(2)}px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const WrapperFooter = styled.View`
  width: 100%;
  align-items: flex-end;
`;
export const WrapperButtons = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
export const WrapperCard = styled.View`
  width: 100%;
`;
export const WrapperInfo = styled.View`
  width: 100%;
  gap: 8px;
  padding: 0 0 12px;
`;
export const BtnCancel = styled(TouchableOpacity)`
  gap: 8px;
`;
export const BtnTextCancel = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_80};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.color_neutral_80};
`;
