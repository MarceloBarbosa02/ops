import { useFetchChart } from '@/shared/queries/charts';
import { useMemo } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { useTheme } from 'styled-components/native';
import { useBillingGraphsStore } from './use-billing-graphs.store';
import { BillingGraphsEmpty } from './billing-graphs.empty';
import { format, valueDateCharts } from '@/shared/utils';
import { addDays, format as formatDate, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

import * as S from './billing-graphs.styles';
import { Typography } from '@/shared/components';

const { width } = Dimensions.get('screen');

export const BillingGraphsCharts = () => {
  const theme = useTheme();
  const { optionSelect } = useBillingGraphsStore((store) => {
    return {
      optionSelect: store.optionSelect,
    };
  });
  const { data, isFetching } = useFetchChart(optionSelect);

  const currentData = useMemo(() => {
    if (optionSelect === 15 || optionSelect === 30) {
      return (
        data?.data &&
        data?.data.map((item, index) => {
          return {
            ...item,
            value: item?.value,
            label: (index + 1) % 2 === 0 ? item?.date.split('-')[2] : '',
          };
        })
      );
    }
    return (
      data?.data &&
      data?.data.map((item, index) => {
        return {
          ...item,
          value: item?.value,
          label: index > 0 && index < 7 ? item?.date.split('-')[2] : '',
        };
      })
    );
  }, [data]);

  const spacing = useMemo(() => {
    if (isFetching) {
      return 100;
    }
    if (optionSelect === 7) {
      return width / 10;
    }
    if (optionSelect === 15) {
      return width / 22;
    }
    return width / 22;
  }, [optionSelect, isFetching]);

  return (
    <View>
      {isFetching ? <BillingGraphsEmpty /> : null}
      <View
        style={{
          marginVertical: 10,
          paddingVertical: 5,
          zIndex: -99999,
          width: '100%',
          overflow: 'hidden',
        }}>
        <LineChart
          isAnimated
          thickness={3}
          color={theme.blue[600]}
          maxValue={(data && data?.totalValue) || 1}
          formatYLabel={function (value: string) {
            return value.length === 1
              ? '0k'
              : `${(Number(value) / 100 / 1000).toFixed(0)}k`;
          }}
          noOfSections={3}
          animateOnDataChange
          animationDuration={1000}
          onDataChangeAnimationDuration={300}
          areaChart
          curved
          showValuesAsDataPointsText
          yAxisTextStyle={{ color: theme.gray[500] }}
          xAxisLabelTextStyle={{ color: theme.gray[500] }}
          data={currentData}
          hideDataPoints
          startFillColor={theme.blue[300]}
          endFillColor={theme.blue[100]}
          startOpacity={0.4}
          endOpacity={0.1}
          spacing={spacing}
          backgroundColor={theme.gray[50]}
          rulesColor={theme.gray[300]}
          rulesType="solid"
          initialSpacing={1}
          endSpacing={1}
          yAxisColor={theme.gray[50]}
          xAxisColor={theme.gray[300]}
          pointerConfig={
            data?.totalValue === 0
              ? undefined
              : {
                  pointerStripColor: 'lightgray',
                  pointerStripWidth: 2,
                  pointerColor: theme.gray[200],
                  radius: 4,
                  pointerLabelWidth: 100,
                  pointerLabelHeight: 90,
                  autoAdjustPointerLabelPosition:
                    data?.totalValue === 0 ? false : true,
                  pointerLabelComponent: (items: any) => {
                    return (
                      <S.WrapperTooltip>
                        <Typography
                          title={`${formatDate(
                            parseISO(items[0].date),
                            'd MMM yyyy'
                          )} + ${formatDate(
                            addDays(parseISO(items[0].date), 1),
                            'd MMM yyyy'
                          )}`}
                        />
                        <Typography title={format.money(items[0].value)} />
                      </S.WrapperTooltip>
                    );
                  },
                }
          }
        />
      </View>
    </View>
  );
};
