import React, { useMemo } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { useTheme } from "styled-components/native";
import { View } from "react-native";

import * as S from "./styles";

interface ConversionItemProps {
  title: string;
  totalPaid: number;
  total: number;
}

export const ConversionItem = ({
  title,
  totalPaid,
  total,
}: ConversionItemProps) => {
  const theme = useTheme();

  const _percent = useMemo(() => {
    return (totalPaid * 100) / (total > 1 ? total : 1);
  }, [totalPaid, total]);

  return (
    <S.Wrapper>
      <CircularProgress
        radius={24}
        value={_percent || 0}
        titleColor={theme.colors.color_neutral_90}
        titleFontSize={14}
        valueSuffix={"%"}
        circleBackgroundColor={theme.colors.color_neutral_10}
        inActiveStrokeColor={theme.colors.color_neutral_0}
        progressValueColor={theme.colors.color_neutral_70}
        activeStrokeColor="#02A0FC"
        inActiveStrokeWidth={3}
        activeStrokeWidth={3}
        inActiveStrokeOpacity={0.5}
        duration={4000}
        allowFontScaling={false}
      />
      <View>
        <S.Title>{title}</S.Title>
        {total ? <S.TitleValue>{total}</S.TitleValue> : null}
      </View>
    </S.Wrapper>
  );
};
