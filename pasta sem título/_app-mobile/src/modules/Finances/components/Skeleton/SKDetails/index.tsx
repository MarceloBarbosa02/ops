import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { useTheme } from "styled-components/native";
import { Dimensions } from "react-native";

import { TCategoryExtract } from "@shared/types/entities/Finance/types";

import * as S from "./styles";

type SKDetails = {
  category: TCategoryExtract;
};

export const SKDetails = ({ category }: SKDetails) => {
  const theme = useTheme();
  const width = Dimensions.get("window").width;

  return (
    <S.Wrapper>
      <ContentLoader
        speed={1}
        width={width}
        height={300}
        viewBox={`0 0 ${width} 300`}
        backgroundColor={theme.colors.gray_l100_d800}
        foregroundColor="silver"
        opacity={0.6}
      >
        <Rect x="0" y="16" rx="4" width="70" height="20" />
        <Rect x="70%" y="16" rx="4" width="20%" height="20" />
        <Rect x="0" y="55" rx="4" width="90" height="20" />
        <Rect x="65%" y="55" rx="4" width="30%" height="20" />
        <Rect x="0" y="95" rx="4" width="110" height="20" />
        <Rect x="57%" y="95" rx="4" width="40%" height="20" />
        <Rect x="0" y="135" rx="4" width="80" height="20" />
        <Rect x="60%" y="135" rx="4" width="30%" height="20" />
        <Rect x="0" y="175" rx="4" width="90" height="20" />
        <Rect x="70%" y="175" rx="4" width="20%" height="20" />
        <Rect x="0" y="215" rx="4" width="50" height="20" />
        <Rect x="65%" y="215" rx="4" width="25%" height="20" />
      </ContentLoader>
    </S.Wrapper>
  );
};
