import styled, { css } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_l50_d900};
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  min-height: 65px;
`;
export const TitleHeader = styled.Text`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
`;
export const ButtonHeader = styled(TouchableOpacity)``;

export const Container = styled.View`
  margin: 8px 24px ${RFPercentage(17)}px;
  border: 1px;
  overflow: hidden;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
`;
export const WrapperHeader = styled.View`
  width: 100%;
  padding: 16px;
  gap: 16px;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;

export const WrapperSeparate = styled.View<{ line?: boolean }>`
  width: 100%;
  padding: 6px 22px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
  background-color: ${({ theme }) => theme.colors.gray_l100_d800};
  margin-bottom: 16px;

  ${({ line }) =>
    line &&
    css`
      align-items: center;
      margin-top: 16px;
    `}
`;

export const LineSeparate = styled.View`
  width: 30%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray_l300_d600};
`;

export const TitleSeparate = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
  line-height: 16px;
`;

export const WrapperItems = styled.View`
  gap: 16px;
`;

export const WrapperItemsDone = styled.View`
  gap: 16px;
`;

export const Content = styled.View``;
export const WrapperFooter = styled.View`
  width: 100%;
  align-items: center;
  padding: 0 0 ${RFPercentage(4)}px;
`;

export const HeaderTesting = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_l300_d600};
  align-items: center;
  justify-content: center;
  padding: 4px 0;
`;
export const HeaderText = styled.Text`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l50_d900};
`;
