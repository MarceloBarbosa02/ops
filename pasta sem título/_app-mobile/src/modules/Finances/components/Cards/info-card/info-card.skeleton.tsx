import ContentLoader, { Circle, Rect, Path } from "react-content-loader/native";
import { Dimensions, View } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./info-card.styles";

const width = Dimensions.get("window").width;

const InfoCardSkeleton = () => {
  const theme = useTheme();

  return (
    <S.WrapperSkeleton>
      <ContentLoader
        speed={1}
        width={width}
        height={28}
        viewBox={`0 0 ${width} 28`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="1" y="0" rx="4" width="11%" height="15" />
        <Rect x="13%" y="0" rx="4" width="5%" height="15" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={65}
        viewBox={`0 0 ${width} 65`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="1" y="0" rx="4" width="88%" height="50" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={65}
        viewBox={`0 0 ${width} 65`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="1" y="0" rx="4" width="88%" height="50" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={65}
        viewBox={`0 0 ${width} 65`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="1" y="0" rx="4" width="88%" height="50" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={65}
        viewBox={`0 0 ${width} 65`}
        backgroundColor={theme.colors.gray_l300_d600}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="1" y="0" rx="4" width="88%" height="50" />
      </ContentLoader>
    </S.WrapperSkeleton>
  );
};

export default InfoCardSkeleton;
