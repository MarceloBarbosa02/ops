import React from "react";
import { Keyboard } from "react-native";

import { Checkbox } from "@shared/components/Selects";
import { useSalesStore } from "@shared/store/useSalesStore";

import * as S from "./styles";

export const OriginFilterCard = () => {
  const {
    params,
    handleSetSelectAllOriginFilter,
    handleSetChangeOriginFilter,
  } = useSalesStore((store) => {
    return {
      params: store.params,
      handleSetSelectAllOriginFilter: store.handleSetSelectAllOriginFilter,
      handleSetChangeOriginFilter: store.handleSetChangeOriginFilter,
    };
  });

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Origem</S.Title>
        <S.BtnAll
          activeOpacity={0.7}
          onPress={() => {
            Keyboard.dismiss();
            handleSetSelectAllOriginFilter();
          }}
        >
          <S.AllText>(Selecionar todos)</S.AllText>
        </S.BtnAll>
      </S.WrapperHeader>
      <S.ContainerItems>
        <S.ItemsOrigin index={0}>
          <Checkbox
            active={params.origin?.autoral as boolean}
            title="Autoral"
            onPress={() => {
              Keyboard.dismiss();
              handleSetChangeOriginFilter("autoral");
            }}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params.origin?.affiliation as boolean}
            title="Afiliação"
            onPress={() => {
              Keyboard.dismiss();
              handleSetChangeOriginFilter("affiliation");
            }}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params.origin?.coproduction as boolean}
            title="Coprodução"
            onPress={() => {
              Keyboard.dismiss();
              handleSetChangeOriginFilter("coproduction");
            }}
          />
        </S.ItemsOrigin>
      </S.ContainerItems>
    </S.Wrapper>
  );
};
