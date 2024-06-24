import ContentLoader, { Rect } from "react-content-loader/native";
import { Dimensions } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

const { width } = Dimensions.get("window");

export const SkeletonList = () => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <ContentLoader
        speed={1}
        width={width}
        height={80}
        viewBox={`0 0 ${width} 80`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="5%" y="0" rx="4" width="43%" height="70" />
        <Rect x="51%" y="0" rx="4" width="43%" height="70" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={300}
        viewBox={`0 0 ${width} 300`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="5%" y="0" rx="6" width="90%" height="300" />
      </ContentLoader>
      <ContentLoader
        speed={1}
        width={width}
        height={300}
        viewBox={`0 0 ${width} 300`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="5%" y="0" rx="6" width="90%" height="300" />
      </ContentLoader>
      <ContentLoader
        speed={1}
        width={width}
        height={300}
        viewBox={`0 0 ${width} 300`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="5%" y="0" rx="6" width="90%" height="300" />
      </ContentLoader>
      <ContentLoader
        speed={1}
        width={width}
        height={300}
        viewBox={`0 0 ${width} 300`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="5%" y="0" rx="6" width="90%" height="300" />
      </ContentLoader>
    </S.Wrapper>
  );
};
