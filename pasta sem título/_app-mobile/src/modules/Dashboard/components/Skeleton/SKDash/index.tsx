import React from "react";
import ContentLoader, { Circle, Rect, Path } from "react-content-loader/native";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "styled-components/native";
import { Dimensions } from "react-native";

import * as S from "./styles";

export const SKDash = () => {
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
      <S.WrapperGraphicCard>
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
            <Rect x="8" y="7" rx="12" width="220" height="16" />
            <Rect x="8" y="50" rx="12" width="150" height="16" />
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
            <Rect x="2%" y="0" rx="12" width="23%" height="40" />
            <Rect x="28%" y="0" rx="12" width="23%" height="40" />
            <Rect x="55%" y="0" rx="12" width="23%" height="40" />
          </ContentLoader>
        </S.WrapperCard>
        <S.WrapperGraphic>
          <ContentLoader
            speed={1}
            width={width}
            height={314}
            viewBox={`0 0 ${width} 314`}
            backgroundColor={theme.colors.color_neutral_20}
            foregroundColor="silver"
          >
            <Path
              opacity="0.6"
              d="M0 135.102C0 133.915 0.264103 132.743 0.773163 131.671L38.6222 51.9515C41.64 45.5953 50.8025 45.9502 53.3196 52.5207L89.4547 146.846C91.1703 151.324 96.4133 153.297 100.656 151.061L130.945 135.096C135.546 132.67 141.202 135.212 142.444 140.263L179.113 289.435C181.096 297.501 192.536 297.576 194.625 289.538L226.319 167.567C228.341 159.788 239.285 159.513 241.694 167.181L270.76 259.671C273.234 267.543 284.56 266.97 286.227 258.889L325.801 67.0495C326.342 64.4281 328.158 62.2507 330.64 61.2482L364.087 47.7367C368.832 45.8198 374.132 48.79 374.974 53.8383L419.891 323.147C419.964 323.582 420 324.023 420 324.464V351.52C420 355.938 416.418 359.52 412 359.52H373.333H326.667H280H233.333H186.667H140H93.3333H46.6667H8.00001C3.58173 359.52 0 355.938 0 351.52V135.102Z"
              fill="url(#paint1_linear_45813_32)"
            />
          </ContentLoader>
          <ContentLoader
            speed={1}
            width={width}
            height={314}
            viewBox={`0 0 ${width} 314`}
            backgroundColor={theme.colors.color_neutral_30}
            foregroundColor="silver"
            style={{ position: "absolute", zIndex: 1 }}
          >
            <Path
              d="M0 83.9941C0 74.2951 14.0252 72.9592 15.8562 82.4838L43.2662 225.071C43.6917 227.284 45.0309 229.215 46.9546 230.389L86.1735 254.327C90.0717 256.706 95.1674 255.344 97.3595 251.338L131.084 189.7C132.68 186.782 135.916 185.156 139.211 185.617L181.131 191.485C184.456 191.951 187.718 190.29 189.298 187.328L224.957 120.491C228.205 114.404 237.119 115.007 239.517 121.477L274.633 216.242C276.714 221.858 284.002 223.28 288.041 218.858L326.667 176.569L364.546 124.268C368.298 119.088 376.311 120.187 378.529 126.186L419.503 236.989C419.832 237.877 420 238.816 420 239.763V351.52C420 355.938 416.418 359.52 412 359.52H373.333H326.667H280H233.333H186.667H140H93.3333H46.6667H8.00001C3.58173 359.52 0 355.938 0 351.52V83.9941Z"
              fill="url(#paint0_linear_45813_32)"
            />
          </ContentLoader>
        </S.WrapperGraphic>
      </S.WrapperGraphicCard>
      <S.WrapperGraphicCard>
        <ContentLoader
          speed={1}
          width={width}
          height={130}
          viewBox={`0 0 ${width} 130`}
          backgroundColor={theme.colors.color_neutral_20}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="24" y="24" rx="6" width="260" height="20" />

          <Circle x="16" y="73" cx="8%" cy="8%" r="8%" />
          <Rect x="19%" y="46%" rx="6" width="10%" height="10%" />
          <Rect x="19%" y="59%" rx="6" width="6%" height="10%" />

          <Circle x="130" y="73" cx="8%" cy="8%" r="8%" />
          <Rect x="46%" y="46%" rx="6" width="10%" height="10%" />
          <Rect x="46%" y="59%" rx="6" width="6%" height="10%" />

          <Circle x="240" y="73" cx="8%" cy="8%" r="8%" />
          <Rect x="73%" y="46%" rx="6" width="10%" height="10%" />
          <Rect x="73%" y="59%" rx="6" width="6%" height="10%" />
        </ContentLoader>
      </S.WrapperGraphicCard>
      <S.WrapperGraphicCard>
        <ContentLoader
          speed={1}
          width={width}
          height={130}
          viewBox={`0 0 ${width} 130`}
          backgroundColor={theme.colors.color_neutral_20}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="24" y="24" rx="12" width="90" height="20" />
          <Rect x="24" y="60" rx="12" width="270" height="20" />
          <Rect x="24" y="93" rx="12" width="270" height="20" />
        </ContentLoader>
      </S.WrapperGraphicCard>
      <S.WrapperGraphicCard>
        <ContentLoader
          speed={1}
          width={width}
          height={130}
          viewBox={`0 0 ${width} 130`}
          backgroundColor={theme.colors.color_neutral_20}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="24" y="24" rx="12" width="90" height="20" />
          <Rect x="24" y="60" rx="12" width="270" height="20" />
          <Rect x="24" y="93" rx="12" width="270" height="20" />
        </ContentLoader>
      </S.WrapperGraphicCard>
    </S.Wrapper>
  );
};
