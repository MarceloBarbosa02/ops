import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import { useTheme } from 'styled-components/native';
import { View } from 'react-native';

import { Typography } from '@/shared/components';

import * as S from './sales-conversion.styles';

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
  const _percent = (totalPaid * 100) / (total > 1 ? total : 1) || 0;

  return (
    <S.WrapperItem>
      <View style={{ alignItems: 'center' }}>
        <Typography
          title={title.split(' ')[0]}
          variant="subtitle"
          size="small"
          weight="bold"
        />
        <View style={{ flexDirection: 'row' }}>
          <Typography
            title={`${totalPaid ?? 0}`}
            variant="subtitle"
            size="small"
            weight="bold"
            colorValue="success"
          />
          <Typography
            title={`/${total ?? 0}`}
            variant="subtitle"
            size="small"
            weight="bold"
          />
        </View>
      </View>
      <CircularProgress
        radius={30}
        value={_percent}
        valueSuffix={'%'}
        circleBackgroundColor={theme.gray[50]}
        inActiveStrokeColor={theme.gray[300]}
        progressValueStyle={{
          fontSize: 12,
          fontWeight: '700',
          color: theme.gray[600],
        }}
        activeStrokeColor={theme.blue[600]}
        inActiveStrokeWidth={12}
        activeStrokeWidth={8}
        inActiveStrokeOpacity={0.6}
        duration={4000}
        allowFontScaling={false}
      />
    </S.WrapperItem>
  );
};
