import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  border: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
`;
export const WrapperItems = styled.View`
  width: 100%;
  gap: 8px;
  padding: 16px;
`;
export const WrapperInfo = styled.View`
  gap: 4px;
  align-items: center;
  flex-direction: row;
`;
export const Dot = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.color_neutral_40};
`;
export const WrapperAnnual = styled.View`
  width: 100%;
  gap: 8px;
  align-items: flex-end;
`;
export const TitleAnnual = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const BtnShow = styled(TouchableOpacity)`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
export const WrapperFooter = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
  padding: 8px;
  align-items: center;
`;
