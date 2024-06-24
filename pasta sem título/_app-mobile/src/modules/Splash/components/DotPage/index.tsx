import React from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";

import * as S from "./styles";

type DotPageProps = {
  data: any[];
  scrollX: any;
  handleNavigation(index: number): void;
};

export const DotPage = ({ data, scrollX, handleNavigation }: DotPageProps) => {
  const { width } = useWindowDimensions();

  return (
    <S.Wrapper>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [35, 60, 35],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: "clamp",
        });

        return (
          <TouchableOpacity
            key={index.toString()}
            onPress={() => handleNavigation(index)}
          >
            <S.Dot style={{ width: dotWidth, opacity }} />
          </TouchableOpacity>
        );
      })}
    </S.Wrapper>
  );
};
