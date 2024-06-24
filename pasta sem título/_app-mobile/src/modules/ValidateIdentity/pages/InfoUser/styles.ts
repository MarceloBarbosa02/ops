import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding: 24px 0;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  text-align: center;
  margin-top: 24px;
`;
export const Items = styled.View`
  padding: 24px;
  gap: 12px;
`;
export const WrapperHeader = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 36px;
  gap: 36px;
`;
export const WrapperFooter = styled.View`
  align-items: center;
  justify-content: center;
  padding: 24px;
`;
export const WrapperContent = styled.View`
  flex: 1;
  gap: 16px;
  padding: 36px 0;
  align-items: center;
  justify-content: space-between;
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l500_d400};
  text-align: center;
`;
export const BtnLink = styled(TouchableOpacity)`
  margin-top: -3px;
`;
export const DescriptionLink = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.color_buttons.primary_default};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.color_buttons.primary_default};
`;
export const WrapperInfo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
  margin-top: 12px;
`;
export const WrapperFlag = styled.View`
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 2px 8px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.color_neutral_60};
  border-style: dashed;
`;
export const FlagText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 900;
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
