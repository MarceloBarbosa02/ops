import React, { useMemo } from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "styled-components/native";
import { Dimensions } from "react-native";

import * as S from "./styles";

export const SKFinance = () => {
  const theme = useTheme();
  const width = Dimensions.get("window").width;

  return (
    <S.Wrapper>
      <S.WrapperTop>
        <S.Title>RESUMO</S.Title>
        <Feather name="eye" size={18} color={theme.colors.color_neutral_70} />
      </S.WrapperTop>
      <S.WrapperCard>
        <ContentLoader
          speed={1}
          width={width}
          height={80}
          viewBox={`0 0 ${width} 80`}
          backgroundColor={theme.colors.color_neutral_20}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="8" y="7" rx="12" width="70" height="20" />
          <Rect x="8" y="50" rx="12" width="170" height="20" />
        </ContentLoader>
      </S.WrapperCard>
      <S.WrapperCard>
        <ContentLoader
          speed={1}
          width={width}
          height={80}
          viewBox={`0 0 ${width} 80`}
          backgroundColor={theme.colors.color_neutral_20}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="8" y="7" rx="12" width="70" height="20" />
          <Rect x="8" y="50" rx="12" width="170" height="20" />
        </ContentLoader>
      </S.WrapperCard>
      <S.WrapperCard>
        <ContentLoader
          speed={1}
          width={width}
          height={80}
          viewBox={`0 0 ${width} 80`}
          backgroundColor={theme.colors.color_neutral_20}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="8" y="7" rx="12" width="70" height="20" />
          <Rect x="8" y="50" rx="12" width="170" height="20" />
        </ContentLoader>
      </S.WrapperCard>
      <S.WrapperCard>
        <ContentLoader
          speed={1}
          width={width}
          height={80}
          viewBox={`0 0 ${width} 80`}
          backgroundColor={theme.colors.color_neutral_20}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="8" y="7" rx="12" width="70" height="20" />
          <Rect x="8" y="50" rx="12" width="170" height="20" />
        </ContentLoader>
      </S.WrapperCard>
      <ContentLoader
        speed={1}
        width={width}
        height={30}
        viewBox={`0 0 ${width} 30`}
        backgroundColor={theme.colors.color_neutral_20}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="8" y="7" rx="12" width="270" height="20" />
      </ContentLoader>
      <S.WrapperGraphicCard>
        <ContentLoader
          speed={1}
          width={width}
          height={300}
          viewBox={`0 0 ${width} 300`}
          backgroundColor={theme.colors.color_neutral_20}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="24" y="24" rx="8" width="250" height="20" />
          <Rect x="24" y="66" rx="8" width="300" height="20" />

          <Rect x="24" y="120" rx="8" width="300" height="60" />

          <Rect x="24" y="200" rx="8" width="300" height="60" />
        </ContentLoader>
      </S.WrapperGraphicCard>
      <ContentLoader
        speed={1}
        width={width}
        height={30}
        viewBox={`0 0 ${width} 30`}
        backgroundColor={theme.colors.color_neutral_20}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="8" y="7" rx="12" width="270" height="20" />
      </ContentLoader>
      <S.WrapperGraphicCard>
        <ContentLoader
          speed={1}
          width={width}
          height={230}
          viewBox={`0 0 ${width} 230`}
          backgroundColor={theme.colors.color_neutral_20}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="24" y="24" rx="8" width="120" height="20" />
          <Rect x="214" y="24" rx="8" width="120" height="20" />
          <Rect x="24" y="76" rx="8" width="120" height="20" />
          <Rect x="214" y="76" rx="8" width="120" height="20" />
          <Rect x="24" y="130" rx="8" width="120" height="20" />
          <Rect x="214" y="126" rx="8" width="120" height="30" />

          <Rect x="0" y="176" rx="8" width="90%" height="2" />
          <Rect x="22%" y="190" rx="8" width="180" height="20" />
        </ContentLoader>
      </S.WrapperGraphicCard>
      <S.WrapperGraphicCard>
        <ContentLoader
          speed={1}
          width={width}
          height={230}
          viewBox={`0 0 ${width} 230`}
          backgroundColor={theme.colors.color_neutral_20}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="24" y="24" rx="8" width="120" height="20" />
          <Rect x="214" y="24" rx="8" width="120" height="20" />
          <Rect x="24" y="76" rx="8" width="120" height="20" />
          <Rect x="214" y="76" rx="8" width="120" height="20" />
          <Rect x="24" y="130" rx="8" width="120" height="20" />
          <Rect x="214" y="126" rx="8" width="120" height="30" />

          <Rect x="0" y="176" rx="8" width="90%" height="2" />
          <Rect x="22%" y="190" rx="8" width="180" height="20" />
        </ContentLoader>
      </S.WrapperGraphicCard>
      <S.WrapperGraphicCard>
        <ContentLoader
          speed={1}
          width={width}
          height={230}
          viewBox={`0 0 ${width} 230`}
          backgroundColor={theme.colors.color_neutral_20}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="24" y="24" rx="8" width="120" height="20" />
          <Rect x="214" y="24" rx="8" width="120" height="20" />
          <Rect x="24" y="76" rx="8" width="120" height="20" />
          <Rect x="214" y="76" rx="8" width="120" height="20" />
          <Rect x="24" y="130" rx="8" width="120" height="20" />
          <Rect x="214" y="126" rx="8" width="120" height="30" />

          <Rect x="0" y="176" rx="8" width="90%" height="2" />
          <Rect x="22%" y="190" rx="8" width="180" height="20" />
        </ContentLoader>
      </S.WrapperGraphicCard>
      <S.WrapperGraphicCard>
        <ContentLoader
          speed={1}
          width={width}
          height={230}
          viewBox={`0 0 ${width} 230`}
          backgroundColor={theme.colors.color_neutral_20}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="24" y="24" rx="8" width="120" height="20" />
          <Rect x="214" y="24" rx="8" width="120" height="20" />
          <Rect x="24" y="76" rx="8" width="120" height="20" />
          <Rect x="214" y="76" rx="8" width="120" height="20" />
          <Rect x="24" y="130" rx="8" width="120" height="20" />
          <Rect x="214" y="126" rx="8" width="120" height="30" />

          <Rect x="0" y="176" rx="8" width="90%" height="2" />
          <Rect x="22%" y="190" rx="8" width="180" height="20" />
        </ContentLoader>
      </S.WrapperGraphicCard>
    </S.Wrapper>
  );
};
