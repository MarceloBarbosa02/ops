import { Animated, Pressable } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const WrapperAuth = styled.View`
  flex: 1;
  padding: ${RFPercentage(8)}px ${RFPercentage(2.6)}px 0;
`;

export const Content = styled.View<{ sizeHeight: number }>`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  padding-bottom: ${({ sizeHeight }) => sizeHeight}px;
  background-color: ${({ theme }) => theme.colors.gray_l50_d900};
`;

export const HeaderTesting = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_l400_d500};
  align-items: center;
  justify-content: center;
  padding: 4px 0;
`;

export const HeaderTabs = styled.View`
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const HeaderModal = styled.View<{ marginTTop: number }>`
  height: 60px;
  align-items: center;
  justify-content: center;
  margin-top: ${({ marginTTop }) => -marginTTop}px;
`;

export const MainTabs = styled(Animated.View)`
  flex: 1;
  padding: 0 ${RFPercentage(2.6)}px ${RFPercentage(12)}px;
`;

export const WrapperModal = styled.View`
  flex: 1;
`;

export const WrapperFooterModal = styled.View`
  width: 100%;
  align-items: flex-end;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
  padding: 16px ${RFPercentage(2.6)}px;
`;

export const MainStack = styled.View`
  flex: 1;
  padding: 0 ${RFPercentage(2.6)}px ${RFPercentage(12)}px;
`;

export const WrapperBase = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_l200_d700};
`;

export const MainBase = styled.View<{ isModalScreen?: boolean }>`
  flex: 1;

  ${({ isModalScreen }) =>
    isModalScreen &&
    css`
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border: 1px;
      overflow: hidden;
      background-color: ${({ theme }) => theme.colors.gray_l50_d900};
    `}
`;

export const HeaderStack = styled.View`
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  flex-direction: row;
`;

export const HeaderStackSteps = styled.View`
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 4px ${RFPercentage(2)}px;
  flex-direction: row;
`;

export const HeaderButtonSteps = styled(Pressable)`
  width: ${RFPercentage(4)}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const HeaderButtonBack = styled(Pressable)`
  width: ${RFPercentage(4)}px;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${RFPercentage(2)}px;
`;

export const WrapperHeaderEnv = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 4px 24px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.blue_l300_d600};
  background-color: ${({ theme }) => theme.colors.blue_l50_d900};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 4px ${RFPercentage(2.6)}px;
`;

export const HeaderButtonLeft = styled(Pressable)`
  width: ${RFPercentage(4)}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const HeaderButtonRight = styled(Pressable)`
  width: ${RFPercentage(4)}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
  text-align: center;
`;

export const TitleHeader = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
  text-align: center;
`;
