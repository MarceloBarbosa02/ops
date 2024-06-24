import React, { useEffect, useMemo, useRef, useState } from "react";
import ptBR from "date-fns/locale/pt-BR";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { parseISO, format } from "date-fns";
import { LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import { SVGRenderer, SkiaChart } from "@wuba/react-native-echarts";
import { RFPercentage } from "react-native-responsive-fontsize";
import * as echarts from "echarts/core";

import { days_charts } from "@modules/Dashboard/mocks/days_charts";
import { useFetchChart } from "@modules/Dashboard/hooks";
import {
  formatCurrencyMoneyPtBr,
  valueDateCharts,
} from "@shared/utils/formatters";

import { BtnCharts } from "../../Buttons";
import * as S from "./styles";

echarts.use([SVGRenderer, LineChart, GridComponent, TooltipComponent]);

export const ChartsCards = () => {
  const [optionSelect, setOptionSelect] = useState<number>(7);
  const theme = useTheme();
  const skiaRef = useRef<any>(null);
  const { data } = useFetchChart(optionSelect);

  const formatX = (value: string) => {
    const date = parseISO(value);
    return format(date, "d MMM", { locale: ptBR });
  };

  const formatDataX = useMemo(() => {
    return data?.data?.map((item) => {
      return item.date;
    });
  }, [data]);

  const formatDataValue = useMemo(() => {
    return data?.data?.map((item) => {
      return item.value / 100;
    });
  }, [data]);

  useEffect(() => {
    const option = {
      textStyle: {
        fontSize: 14,
      },
      tooltip: {
        trigger: "axis",
        textStyle: {
          fontSize: 14,
          color: theme.colors.color_neutral_90,
        },
        backgroundColor: theme.colors.color_neutral_0,
        axisPointer: {
          type: "line",
        },
        formatter: function (value: any) {
          return valueDateCharts(optionSelect, value[0].name, value[0].data);
        },
      },
      xAxis: {
        type: "category",
        data: formatDataX,
        axisLabel: {
          formatter: function (value: string) {
            return formatX(value);
          },
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
          },
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: function (value: string) {
            return value.length === 1
              ? "0k"
              : String((Number(value) / 100 / 10).toFixed(0) + "k");
          },
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
          },
        },
      },
      series: [
        {
          name: "R$",
          symbol: "circle",
          symbolSize: 10,
          data: formatDataValue,
          type: "line",
          lineStyle: {
            color: theme.colors.color_blue_50,
            width: 4,
          },
          itemStyle: {
            borderWidth: 3,
            borderColor: theme.colors.color_neutral_30,
            color: theme.colors.color_blue_50,
          },
        },
      ],
      grid: {
        top: 30,
        left: 40,
        right: 30,
        bottom: 40,
      },
    };
    let chart: any;
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, "light", {
        renderer: "svg",
        width: RFPercentage(100),
        height: RFPercentage(50),
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, [formatDataX]);

  const handleToggleDays = (days: number) => {
    setOptionSelect(days);
  };

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>GRÁFICO DE FATURAMENTO</S.Title>
        <S.WrapperTitle>
          <S.LabelValue>VENDAS </S.LabelValue>
          <S.TitleValue>
            {formatCurrencyMoneyPtBr(data?.totalValue || 0)}
          </S.TitleValue>
        </S.WrapperTitle>
        <S.WrapperDays>
          {days_charts.map((item) => (
            <BtnCharts
              key={item.day.toString()}
              title={item.label}
              active={item.day === optionSelect}
              onPress={() => handleToggleDays(item.day)}
            />
          ))}
        </S.WrapperDays>
      </S.WrapperHeader>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SkiaChart ref={skiaRef} />
      </ScrollView>
    </S.Wrapper>
  );
};
