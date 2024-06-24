import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { useTheme } from "styled-components/native";
import { Dimensions } from "react-native";

import * as S from "./styles";

export const SKExtract = () => {
  const theme = useTheme();
  const width = Dimensions.get("window").width;

  return (
    <S.Wrapper>
      <S.WrapperCard>
        <ContentLoader
          speed={1}
          width={width}
          height={170}
          viewBox={`0 0 ${width} 170`}
          backgroundColor={theme.colors.gray_l100_d800}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="8" y="10" rx="4" width="70" height="20" />
          <Rect x="50%" y="10" rx="4" width="70" height="20" />
          <Rect x="8" y="50" rx="4" width="50" height="20" />
          <Rect x="44%" y="50" rx="4" width="90" height="20" />
          <Rect x="8" y="90" rx="4" width="50" height="20" />
          <Rect x="50%" y="90" rx="4" width="70" height="20" />
          <Rect x="8" y="130" rx="4" width="67%" height="40" />
        </ContentLoader>
      </S.WrapperCard>
      <S.WrapperCard>
        <ContentLoader
          speed={1}
          width={width}
          height={160}
          viewBox={`0 0 ${width} 160`}
          backgroundColor={theme.colors.gray_l100_d800}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="8" y="10" rx="4" width="70" height="20" />
          <Rect x="50%" y="10" rx="4" width="70" height="20" />
          <Rect x="8" y="50" rx="4" width="50" height="20" />
          <Rect x="44%" y="50" rx="4" width="90" height="20" />
          <Rect x="8" y="90" rx="4" width="50" height="20" />
          <Rect x="50%" y="90" rx="4" width="70" height="20" />
          <Rect x="8" y="130" rx="4" width="67%" height="40" />
        </ContentLoader>
      </S.WrapperCard>
      <S.WrapperCard>
        <ContentLoader
          speed={1}
          width={width}
          height={160}
          viewBox={`0 0 ${width} 160`}
          backgroundColor={theme.colors.gray_l100_d800}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="8" y="10" rx="4" width="70" height="20" />
          <Rect x="50%" y="10" rx="4" width="70" height="20" />
          <Rect x="8" y="50" rx="4" width="50" height="20" />
          <Rect x="44%" y="50" rx="4" width="90" height="20" />
          <Rect x="8" y="90" rx="4" width="50" height="20" />
          <Rect x="50%" y="90" rx="4" width="70" height="20" />
          <Rect x="8" y="130" rx="4" width="67%" height="40" />
        </ContentLoader>
      </S.WrapperCard>
      <S.WrapperCard>
        <ContentLoader
          speed={1}
          width={width}
          height={160}
          viewBox={`0 0 ${width} 160`}
          backgroundColor={theme.colors.gray_l100_d800}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="8" y="10" rx="4" width="70" height="20" />
          <Rect x="50%" y="10" rx="4" width="70" height="20" />
          <Rect x="8" y="50" rx="4" width="50" height="20" />
          <Rect x="44%" y="50" rx="4" width="90" height="20" />
          <Rect x="8" y="90" rx="4" width="50" height="20" />
          <Rect x="50%" y="90" rx="4" width="70" height="20" />
          <Rect x="8" y="130" rx="4" width="67%" height="40" />
        </ContentLoader>
      </S.WrapperCard>
      <S.WrapperCard>
        <ContentLoader
          speed={1}
          width={width}
          height={160}
          viewBox={`0 0 ${width} 160`}
          backgroundColor={theme.colors.gray_l100_d800}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="8" y="10" rx="4" width="70" height="20" />
          <Rect x="50%" y="10" rx="4" width="70" height="20" />
          <Rect x="8" y="50" rx="4" width="50" height="20" />
          <Rect x="44%" y="50" rx="4" width="90" height="20" />
          <Rect x="8" y="90" rx="4" width="50" height="20" />
          <Rect x="50%" y="90" rx="4" width="70" height="20" />
          <Rect x="8" y="130" rx="4" width="67%" height="40" />
        </ContentLoader>
      </S.WrapperCard>
    </S.Wrapper>
  );
};
