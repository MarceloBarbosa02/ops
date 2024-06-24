import { TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const WrapperHeader = styled.View`
  width: 100%;
  padding: 16px 16px 8px;
  gap: 16px;
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperInfo = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
`;
export const WrapperDot = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  align-items: center;
  justify-content: center;
  border-radius: 99999px;
  background-color: ${({ theme }) => theme.colors.gray_l300_d600};
`;
export const TotalExtract = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fonts.sizes.smallS}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.variable};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
`;

export const WrapperInput = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 16px;
  padding: 0 0 8px;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperInputSearch = styled.View<{ color: string }>`
  width: 78%;
  height: 48px;
  border: 1px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  border-color: ${({ color }) => color};
`;
export const InputSearch = styled(TextInput)`
  width: 90%;
  padding: 0 8px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const TitleCount = styled.Text`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l800_d100};
`;
