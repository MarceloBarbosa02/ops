import React from "react";
import { Keyboard } from "react-native";

import { Checkbox } from "@shared/components/Selects";
import { useSalesStore } from "@shared/store/useSalesStore";

import * as S from "./styles";

export const MethodPaymentFilterCard = () => {
  const {
    params,
    handleSetSelectAllPaymentMethodFilter,
    handleSetChangePaymentMethodFilter,
  } = useSalesStore((store) => {
    return {
      params: store.params,
      handleSetSelectAllPaymentMethodFilter:
        store.handleSetSelectAllPaymentMethodFilter,
      handleSetChangePaymentMethodFilter:
        store.handleSetChangePaymentMethodFilter,
    };
  });

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Método de pagamento</S.Title>
        <S.BtnAll
          activeOpacity={0.7}
          onPress={() => {
            Keyboard.dismiss();
            handleSetSelectAllPaymentMethodFilter();
          }}
        >
          <S.AllText>(Selecionar todos)</S.AllText>
        </S.BtnAll>
      </S.WrapperHeader>
      <S.ContainerItems>
        <S.ItemsOrigin index={0}>
          <Checkbox
            active={params.paymentMethodFilter?.creditCard as boolean}
            title="Cartão de crédito"
            onPress={() => {
              Keyboard.dismiss();
              handleSetChangePaymentMethodFilter("creditCard");
            }}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params.paymentMethodFilter?.bankSlip as boolean}
            title="Boleto"
            onPress={() => {
              Keyboard.dismiss();
              handleSetChangePaymentMethodFilter("bankSlip");
            }}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params.paymentMethodFilter?.pix as boolean}
            title="Pix"
            onPress={() => {
              Keyboard.dismiss();
              handleSetChangePaymentMethodFilter("pix");
            }}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params.paymentMethodFilter?.free as boolean}
            title="Gratuito"
            onPress={() => {
              Keyboard.dismiss();
              handleSetChangePaymentMethodFilter("free");
            }}
          />
        </S.ItemsOrigin>
      </S.ContainerItems>
    </S.Wrapper>
  );
};
