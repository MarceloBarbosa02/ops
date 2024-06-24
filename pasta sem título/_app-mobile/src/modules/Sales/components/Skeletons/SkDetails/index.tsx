import ContentLoader, { Circle, Rect, Path } from "react-content-loader/native";
import { Dimensions, View } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

const width = Dimensions.get("window").width;

export const SkDetails = () => {
  const theme = useTheme();

  return (
    <S.WrapperSkeleton>
      <ContentLoader
        speed={1}
        width={width}
        height={30}
        viewBox={`0 0 ${width} 30`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="0" y="0" rx="4" width="42%" height="20" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={160}
        viewBox={`0 0 ${width} 160`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="0" y="0" rx="4" width="87%" height="150" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={450}
        viewBox={`0 0 ${width} 450`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="0" y="0" rx="4" width="35%" height="25" />

        <Rect x="0" y="40" rx="4" width="27%" height="20" />
        <Rect x="0" y="70" rx="4" width="47%" height="20" />

        <Rect x="0" y="110" rx="4" width="30%" height="20" />
        <Rect x="0" y="140" rx="4" width="60%" height="20" />

        <Rect x="0" y="180" rx="4" width="38%" height="20" />
        <Rect x="0" y="210" rx="4" width="35%" height="20" />

        <Rect x="0" y="250" rx="4" width="30%" height="20" />
        <Rect x="0" y="280" rx="4" width="77%" height="20" />

        <Rect x="0" y="320" rx="4" width="38%" height="20" />
        <Rect x="0" y="350" rx="4" width="35%" height="20" />

        <Rect x="0" y="390" rx="4" width="30%" height="20" />
        <Rect x="0" y="420" rx="4" width="57%" height="20" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={450}
        viewBox={`0 0 ${width} 450`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="0" y="0" rx="4" width="35%" height="25" />

        <Rect x="0" y="40" rx="4" width="27%" height="20" />
        <Rect x="0" y="70" rx="4" width="47%" height="20" />

        <Rect x="0" y="110" rx="4" width="30%" height="20" />
        <Rect x="0" y="140" rx="4" width="60%" height="20" />

        <Rect x="0" y="180" rx="4" width="38%" height="20" />
        <Rect x="0" y="210" rx="4" width="35%" height="20" />

        <Rect x="0" y="250" rx="4" width="30%" height="20" />
        <Rect x="0" y="280" rx="4" width="77%" height="20" />

        <Rect x="0" y="320" rx="4" width="38%" height="20" />
        <Rect x="0" y="350" rx="4" width="35%" height="20" />

        <Rect x="0" y="390" rx="4" width="30%" height="20" />
        <Rect x="0" y="420" rx="4" width="57%" height="20" />
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
        <Rect x="0" y="0" rx="4" width="87%" height="280" />
      </ContentLoader>
    </S.WrapperSkeleton>
  );
};
