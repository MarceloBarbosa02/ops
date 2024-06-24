import React from "react";
import { Keyboard } from "react-native";

import { Checkbox } from "@shared/components/Selects";
import { useSalesStore } from "@shared/store/useSalesStore";

import * as S from "./styles";

export const TypeOffersFilterCard = () => {
  const {
    params,
    handleSetSelectAllTypeOffersFilter,
    handleSetChangeTypeOffersFilter,
  } = useSalesStore((store) => {
    return {
      params: store.params,
      handleSetSelectAllTypeOffersFilter:
        store.handleSetSelectAllTypeOffersFilter,
      handleSetChangeTypeOffersFilter: store.handleSetChangeTypeOffersFilter,
    };
  });

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Tipo de oferta</S.Title>
        <S.BtnAll
          activeOpacity={0.7}
          onPress={() => {
            Keyboard.dismiss();
            handleSetSelectAllTypeOffersFilter();
          }}
        >
          <S.AllText>(Selecionar todos)</S.AllText>
        </S.BtnAll>
      </S.WrapperHeader>
      <S.ContainerItems>
        <S.ItemsOrigin index={0}>
          <Checkbox
            active={params.typeOffers?.oneTime as boolean}
            title="Preço único"
            onPress={() => {
              Keyboard.dismiss();
              handleSetChangeTypeOffersFilter("oneTime");
            }}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params.typeOffers?.recurring as boolean}
            title="Assinatura"
            onPress={() => {
              Keyboard.dismiss();
              handleSetChangeTypeOffersFilter("recurring");
            }}
          />
        </S.ItemsOrigin>
      </S.ContainerItems>
    </S.Wrapper>
  );
};
