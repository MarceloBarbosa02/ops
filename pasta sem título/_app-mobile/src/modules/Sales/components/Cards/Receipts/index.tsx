import React from "react";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

import ArrowDown from "@shared/assets/icons/svg/sales/arrow_down.svg";
import { ItensReceipts } from "@shared/components/Items/ItensReceipts";
import { formatCurrencyMoneyPtBr } from "@shared/utils";
import { ChargeFrequency, ISaleCards } from "@shared/types";
import { useSalesStore } from "@shared/store/useSalesStore";

import * as S from "./styles";

interface ReceiptProps {
  data: ISaleCards;
}

export const ReceiptsSales = ({ data }: ReceiptProps) => {
  const { navigate } = useNavigation();
  const { handleOneSalesUUID } = useSalesStore((store) => {
    return {
      handleOneSalesUUID: store.handleOneSalesUUID,
    };
  });

  const handleNavigationDetails = () => {
    handleOneSalesUUID(data.uuid);
    navigate("DetailsSales");
  };

  return (
    <S.Wrapper>
      <S.WrapperItems>
        <ItensReceipts
          title={data.code}
          type="id"
          hasOrderBump={data?.hasOrderBump}
        />
        <ItensReceipts title={data.product} type="product" />
        <ItensReceipts title={data.customer} type="client" />
        <ItensReceipts title={data.status} type="status" />
        <ItensReceipts
          title={format(new Date(data.createdAt), "dd/MM/yyyy ' às ' H'h'mm")}
          type="period"
        />
        <ItensReceipts title={data.brand} type="payment" />
        <ItensReceipts
          title={
            data.value === 0 ? "Gratuito" : formatCurrencyMoneyPtBr(data.value)
          }
          type="value"
        />
        {data?.phoneNumber && (
          <ItensReceipts type="contact" title={data?.phoneNumber} />
        )}
        {data.chargeFrequency && (
          <ItensReceipts
            title={`${ChargeFrequency[data.chargeFrequency]} ${
              data.chargeNumber
            }/${data.chargeLimit}`}
            type="frequency"
          />
        )}
      </S.WrapperItems>
      <S.WrapperFooter>
        <S.BtnShow onPress={handleNavigationDetails} activeOpacity={0.7}>
          <S.Title>Ver mais</S.Title>
          <ArrowDown />
        </S.BtnShow>
      </S.WrapperFooter>
    </S.Wrapper>
  );
};
