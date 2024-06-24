import React from 'react';

import { Typography } from '@/shared/components';
import { EnumPaymentMethod } from '@/shared/enum/EnumPaymentMethod';
import { useConversion } from '@/shared/queries';

import SalesConversionSkeleton from './sales-conversion.skeleton';
import { ConversionItem } from './sales-conversion.item';

import * as S from './sales-conversion.styles';

const ConversionCard = () => {
  const { useFetchConversion } = useConversion();

  const { data: conversionData, isFetching: isLoadingConversion } =
    useFetchConversion();

  if (isLoadingConversion) {
    return <SalesConversionSkeleton />;
  }

  return (
    <S.Wrapper>
      <S.WrapperTop>
        <Typography title="Conversão de vendas" size="small" weight="medium" />
      </S.WrapperTop>
      <S.Container>
        <ConversionItem
          title={EnumPaymentMethod.CREDIT_CARD}
          totalPaid={conversionData?.creditCardApprovedCount}
          total={conversionData?.creditCardCount}
        />
        <ConversionItem
          title={EnumPaymentMethod.PIX}
          totalPaid={conversionData?.pixApprovedCount}
          total={conversionData?.pixCount}
        />
        <ConversionItem
          title={EnumPaymentMethod.BANK_SLIP}
          totalPaid={conversionData?.bankSlipApprovedCount}
          total={conversionData?.bankSlipCount}
        />
      </S.Container>
    </S.Wrapper>
  );
};

export default ConversionCard;
