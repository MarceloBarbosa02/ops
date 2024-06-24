import React, { useEffect } from 'react';
import { useTheme } from 'styled-components/native';
import { ScrollView } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { showToast } from '@/shared/components/toast/use-toast-store';
import { ModalScreen } from '@/shared/components';
import { CopyIcon } from '@/shared/assets/components/sales';
import { useFiltersRequestSales } from '@/shared/queries/sales/sales';

import { useSalesStore } from '../../store';
import {
  ActionSalesManualCard,
  AffiliateCard,
  CustomerCard,
  DetailsCards,
  MarketingCards,
  ProducerCard,
  TransactionCard,
} from '../../components/details';
import { SkeletonSalesDetailsScreen } from '../../components/skeleton';
import { useFilterSales } from './use-filter-sales';

import * as S from './filter-sales.styles';

const DetailsSalesScreenModal = () => {
  const theme = useTheme();
  const { oneSalesUUID } = useSalesStore((store) => {
    return {
      oneSalesUUID: store.oneSalesUUID,
    };
  });
  const { useFetchItemSales } = useFiltersRequestSales();
  const { handleNavigationBack } = useFilterSales();

  const {
    data: detailsSales,
    isError,
    isPending: isLoadingDetail,
  } = useFetchItemSales(oneSalesUUID);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(detailsSales?.code as string);
    showToast({
      type: 'success',
      message: 'Código copiado com sucesso',
    });
  };

  useEffect(() => {
    if (isError) {
      showToast({
        type: 'error',
        message: 'Ops! Algo deu errado.',
      });
      handleNavigationBack();
      return;
    }
  }, [isError]);

  return (
    <ModalScreen title="Detalhes" handleNavigateRight={handleNavigationBack}>
      {isLoadingDetail ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <SkeletonSalesDetailsScreen />
        </ScrollView>
      ) : (
        <>
          <S.WrapperTitle>
            <S.WrapperInfo>
              <S.Title>
                ID. <S.TitleCode>{detailsSales?.code}</S.TitleCode>
              </S.Title>
              <S.WrapperBtnCopy onPress={copyToClipboard}>
                <CopyIcon />
              </S.WrapperBtnCopy>
            </S.WrapperInfo>
          </S.WrapperTitle>
          <S.Wrapper>
            <DetailsCards details={detailsSales?.products || []} />

            <S.Line />

            {detailsSales?.customer && (
              <CustomerCard
                customer={detailsSales?.customer}
                isShowData={detailsSales?.shareCustomerDataEnabled}
              />
            )}

            {detailsSales?.transaction && (
              <TransactionCard
                affiliate={detailsSales?.affiliate}
                producer={detailsSales?.producer}
                transaction={detailsSales?.transaction}
                coProducers={detailsSales?.coproducers}
                coproductionCommission={detailsSales?.coproductionCommission}
              />
            )}

            {detailsSales?.affiliate && (
              <AffiliateCard affiliate={detailsSales.affiliate} />
            )}

            {detailsSales?.producer && (
              <ProducerCard producer={detailsSales.producer} />
            )}

            {detailsSales?.marketing && (
              <MarketingCards marketing={detailsSales?.marketing} />
            )}

            {detailsSales?.saleUuid && (
              <ActionSalesManualCard
                code={detailsSales?.code}
                uuid={detailsSales?.saleUuid}
                subscriptionChargeUuid={
                  detailsSales?.subscriptionChargeUuid ?? null
                }
                canApproveSale={detailsSales?.canApproveSale!}
                canRefundSale={detailsSales?.canRefundSale!}
                onCloseModal={handleNavigationBack}
              />
            )}
          </S.Wrapper>
        </>
      )}
    </ModalScreen>
  );
};

export default DetailsSalesScreenModal;
