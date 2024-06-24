import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import { useTheme } from 'styled-components/native';
import { View } from 'react-native';

import { Typography } from '@/shared/components';

import * as S from './checkout-conversion.styles';
import { FunnelBar, FunnelBar1, FunnelBar2, FunnelBar3 } from './funnel-bar';
import { useFetchValuation } from '@/shared/queries';

export const CheckoutConversionItem = () => {
  const theme = useTheme();
  const { data: valuations } = useFetchValuation();

  const personalData = Math.round(
    (Number(valuations?.valuation.checkoutsSaleDataComplete) /
      Number(valuations?.valuation.checkoutsCount)) *
      100 || 0
  );

  const payment = Math.round(
    (Number(valuations?.valuation.salesCount) /
      Number(valuations?.valuation.checkoutsSaleDataComplete)) *
      100 || 0
  );

  const purchase = Math.round(
    (Number(valuations?.valuation.salesApprovedCount) /
      Number(valuations?.valuation.salesCount)) *
      100 || 0
  );

  return (
    <S.WrapperItems>
      <S.WrapperItem>
        <S.WrapperItemBar>
          <FunnelBar
            active={valuations?.valuation?.checkoutsCount ? true : false}
          />
        </S.WrapperItemBar>
        <S.WrapperItemInfo>
          <Typography
            title={`${valuations?.valuation?.checkoutsCount ?? 0}`}
            variant="subtitle"
            weight="bold"
            style={{ marginTop: 5 }}
          />
          <Typography
            title="Visitas"
            variant="subtitle"
            style={{ marginTop: -5 }}
          />
        </S.WrapperItemInfo>
      </S.WrapperItem>
      <S.WrapperDot marginTop={8} marginRight={0}>
        <Typography
          title={`${personalData}%`}
          variant="subtitle"
          weight="bold"
          style={{ fontSize: 9 }}
        />
      </S.WrapperDot>

      <S.WrapperItem>
        <S.WrapperItemBar>
          <FunnelBar1
            active={
              valuations?.valuation?.checkoutsSaleDataComplete ? true : false
            }
          />
        </S.WrapperItemBar>

        <S.WrapperItemInfo>
          <Typography
            title={`${valuations?.valuation?.checkoutsSaleDataComplete ?? 0}`}
            variant="subtitle"
            weight="bold"
            style={{ marginTop: 5 }}
          />
          <Typography
            title="Dados pessoais"
            variant="subtitle"
            style={{ marginTop: -5 }}
          />
        </S.WrapperItemInfo>
      </S.WrapperItem>

      <S.WrapperDot marginTop={32} marginRight={12}>
        <Typography
          title={`${payment}%`}
          variant="subtitle"
          weight="bold"
          style={{ fontSize: 9 }}
        />
      </S.WrapperDot>

      <S.WrapperItem>
        <S.WrapperItemBar>
          <FunnelBar2
            active={valuations?.valuation?.salesCount ? true : false}
          />
        </S.WrapperItemBar>

        <S.WrapperItemInfo>
          <Typography
            title={`${valuations?.valuation?.salesCount ?? 0}`}
            variant="subtitle"
            weight="bold"
            style={{ marginTop: 5 }}
          />
          <Typography
            title="Pagamentos"
            variant="subtitle"
            style={{ marginTop: -5 }}
          />
        </S.WrapperItemInfo>
      </S.WrapperItem>

      <S.WrapperDot marginTop={56} marginRight={23}>
        <Typography
          title={`${purchase}%`}
          variant="subtitle"
          weight="bold"
          style={{ fontSize: 10 }}
        />
      </S.WrapperDot>

      <S.WrapperItem>
        <S.WrapperItemBar>
          <FunnelBar3
            active={valuations?.valuation?.salesApprovedCount ? true : false}
          />
        </S.WrapperItemBar>

        <S.WrapperItemInfo>
          <Typography
            title={`${valuations?.valuation?.salesApprovedCount ?? 0}`}
            variant="subtitle"
            weight="bold"
            style={{ marginTop: 5 }}
          />
          <Typography
            title="Compras"
            variant="subtitle"
            style={{ marginTop: -5 }}
          />
        </S.WrapperItemInfo>
      </S.WrapperItem>
    </S.WrapperItems>
  );
};
