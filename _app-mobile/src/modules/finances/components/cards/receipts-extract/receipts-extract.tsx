import React from 'react';

import { TReceiptExtractProps } from './receipts-types';
import { useReceipts } from './use-receipts';
import * as S from './receipts-extract.styles';
import { format } from '@/shared/utils';
import { ItemLine } from './receipts-extract-item';
import { Button, Typography } from '@/shared/components';
import { useFinancesStore } from '@/modules/finances/store/use-finances-store';
import { router } from 'expo-router';
import { ExtractDetailsModal } from '../../modal/extract-details';

export const ReceiptsExtract = ({ data }: TReceiptExtractProps) => {
  const { validCategory, refActionSheet, handleShowModalDetail } = useReceipts(
    data.isFuture,
    data.isCanceled,
    data.isDisabled
  );

  return (
    <S.Wrapper>
      <S.WrapperExtract>
        <ItemLine
          label="Código"
          title={data?.code}
          canceled={data.isCanceled}
        />
        <ItemLine label="Descrição" title={data?.title} description="" />
        {data.category && (
          <ItemLine label="Categoria" title={validCategory(data.category)} />
        )}
        {data?.createdAt && (
          <ItemLine
            label="Data"
            title={format.dateToString(
              new Date(data.createdAt),
              "dd/MM/yyyy 'às' HH:mm"
            )}
          />
        )}
        <ItemLine
          label="Valor"
          title={format.money(data.value)}
          out={data.type}
          canceled={data.isCanceled}
        />
        <S.ButtonDetail onPress={() => handleShowModalDetail(data.uuid)}>
          <Typography title="Detalhes" weight="bold" />
        </S.ButtonDetail>
      </S.WrapperExtract>
      <ExtractDetailsModal refActionSheet={refActionSheet} />
    </S.Wrapper>
  );
};
