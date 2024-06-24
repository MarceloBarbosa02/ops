import { View } from 'react-native';

import { Dots, Typography } from '@/shared/components';
import { TSummaryItemProps } from './summary.types';
import { format } from '@/shared/utils';

import { useSummary } from './use-summary';

import * as S from './summary.styles';
import { useMemo } from 'react';

const SummaryItem = ({
  widthSize,
  balance,
  previousDayBalance,
  type,
}: TSummaryItemProps) => {
  const { balanceItems, toggle } = useSummary();

  const dots = useMemo(
    () => (
      <S.WrapperLabel>
        <Typography
          title={`R$`}
          variant="body"
          size="small"
          weight="black"
          colorValue="neutral-light"
        />
        <Dots />
      </S.WrapperLabel>
    ),
    []
  );

  return (
    <S.WrapperItemCard widthSize={widthSize}>
      <View>
        <Typography
          title={balanceItems[type].title}
          variant="subtitle"
          size="large"
          weight="medium"
        />
        {toggle ? (
          <Typography
            title={`${format.money(balance as number)}`}
            variant="body"
            size="small"
            weight="black"
            style={{ color: balanceItems[type].color }}
          />
        ) : (
          <>{dots}</>
        )}
      </View>
      {widthSize === 100 ? (
        <S.WrapperItemInfo>
          <Typography
            title="ontem"
            variant="subtitle"
            size="medium"
            weight="medium"
            colorValue="neutral-medium"
          />
          {toggle ? (
            <Typography
              title={`${format.money(previousDayBalance as number)}`}
              variant="subtitle"
              size="medium"
              weight="medium"
              colorValue="neutral-medium"
            />
          ) : (
            <>{dots}</>
          )}
        </S.WrapperItemInfo>
      ) : null}
    </S.WrapperItemCard>
  );
};

export default SummaryItem;
