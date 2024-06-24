import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { ScrollView } from "react-native";
import * as Clipboard from "expo-clipboard";

import Copy from "@shared/assets/icons/svg/sales/copy.svg";
import { DetailsCards } from "@modules/Sales/components/Cards/Details";
import { useFiltersSearch } from "@modules/Sales/hooks/useFiltersSearch";
import { CustomerCard } from "@modules/Sales/components/Cards/Customer";
import { TransactionCard } from "@modules/Sales/components/Cards/Transactions";
import { MarketingCards } from "@modules/Sales/components/Cards/Marketing";
import { ActionSalesManualCard } from "@modules/Sales/components/Cards/ActionSalesManual";
import { showToast } from "@shared/store/useToastStore";
import { SkDetails } from "@modules/Sales/components/Skeletons";

import * as S from "./styles";
import { AffiliateCard } from "@modules/Sales/components/Cards/Affiliate";
import { ProducerCard } from "@modules/Sales/components/Cards/Producer";
import { useSalesStore } from "@shared/store/useSalesStore";

export const DetailsScreen = () => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { oneSalesUUID } = useSalesStore((store) => {
    return {
      oneSalesUUID: store.oneSalesUUID,
    };
  });
  const { useFetchItemSales } = useFiltersSearch();

  const {
    data: detailsSales,
    isError,
    isLoading: isLoadingDetail,
  } = useFetchItemSales(oneSalesUUID);
  // const isLoadingDetail = true;

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(detailsSales?.code as string);
    showToast({
      type: "success",
      message: "Código copiado com sucesso",
    });
  };

  if (isError) {
    showToast({
      type: "error",
      message: "Ops! Algo deu errado.",
    });
    goBack();
    return;
  }

  console.log({ detailsSales });

  return (
    <S.Container>
      {isLoadingDetail ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <SkDetails />
        </ScrollView>
      ) : (
        <>
          <S.WrapperTitle>
            <S.WrapperInfo>
              <S.Title>
                ID. <S.TitleCode>{detailsSales?.code}</S.TitleCode>
              </S.Title>
              <S.WrapperBtnCopy onPress={copyToClipboard}>
                <Copy />
              </S.WrapperBtnCopy>
            </S.WrapperInfo>
            <S.WrapperBtnClose onPress={goBack}>
              <AntDesign
                name="close"
                size={18}
                color={theme.colors.color_neutral_100}
              />
            </S.WrapperBtnClose>
          </S.WrapperTitle>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
            }}
          >
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
                <AffiliateCard affiliate={detailsSales?.affiliate} />
              )}
              {detailsSales?.producer && (
                <ProducerCard producer={detailsSales?.producer} />
              )}

              <MarketingCards marketing={detailsSales?.marketing} />

              {detailsSales?.saleUuid && (
                <ActionSalesManualCard
                  code={detailsSales?.code}
                  uuid={detailsSales?.saleUuid}
                  subscriptionChargeUuid={
                    detailsSales?.subscriptionChargeUuid ?? null
                  }
                  canApproveSale={detailsSales?.canApproveSale}
                  canRefundSale={detailsSales?.canRefundSale}
                  onCloseModal={goBack}
                />
              )}
            </S.Wrapper>
          </ScrollView>
        </>
      )}
    </S.Container>
  );
};
