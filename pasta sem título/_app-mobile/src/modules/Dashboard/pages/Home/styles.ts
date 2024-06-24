import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const SkeletonCardName = styled(ShimmerPlaceHolder)`
  width: 50%;
  height: ${RFPercentage(3)}px;
  border-radius: 8px;
`;

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const Container = styled.View`
  height: 100%;
  padding: 0 ${RFPercentage(3)}px;
  padding-bottom: ${RFPercentage(12)}px;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;

export const WrapperFooter = styled.View`
  width: 100%;
  margin: 16px 0;
  gap: 16px;
`;
