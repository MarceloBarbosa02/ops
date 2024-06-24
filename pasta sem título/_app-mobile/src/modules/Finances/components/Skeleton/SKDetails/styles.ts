import styled from "styled-components/native";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

export const Wrapper = styled(MotiView)`
  gap: 24px;
  /* padding: 0 16px; */
`;
export const WrapperGraphic = styled.View`
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
  position: relative;
`;
export const WrapperCard = styled(WrapperGraphic)`
  padding: 16px;
`;
export const WrapperGraphicCard = styled(WrapperGraphic)`
  overflow: hidden;
`;
export const WrapperItem = styled(Skeleton)<{
  widthSize: number;
  heightSize: number;
  radiusSize?: number;
}>`
  width: ${({ widthSize }) => widthSize}%;
  height: ${({ heightSize }) => heightSize}px;
  border-radius: ${({ radiusSize }) => (radiusSize ? radiusSize : 20)}px;
  background-color: ${({ theme }) => theme.colors.color_neutral_20};
`;
export const Content = styled.View`
  gap: 16px;
`;
export const Container = styled.View`
  gap: 16px;
  width: 100%;
  margin-top: 24px;
  flex-direction: row;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: 16px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const WrapperTop = styled.View`
  gap: 12px;
  flex-direction: row;
  align-items: center;
`;
