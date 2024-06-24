import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";

import LinearGradient from "react-native-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const SkeletonCardBalance = styled(ShimmerPlaceHolder)`
  width: 100%;
  height: ${RFPercentage(13)}px;
  border-radius: 8px;
`;

export const WrapperLoading = styled.View`
  gap: 16px;
`;

export const Wrapper = styled.View`
  gap: 16px;
  margin-top: 24px;
`;

export const WrapperTop = styled.View`
  gap: 12px;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const BtnToggle = styled(TouchableOpacity)`
  flex-direction: row;
`;
