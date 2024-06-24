import React from "react";

import { Checkbox } from "@shared/components/Selects";
import { EnumTypeExtract } from "@shared/types/enum/EnumExtract";
import { useFinancesStore } from "@shared/store";

import * as S from "./styles";

export const TypeTransactionFilterCard = () => {
  const {
    params,
    handleSetSelectAllTypeTransactionFilter,
    handleSetChangeTypeTransactionFilter,
  } = useFinancesStore((store) => {
    return {
      params: store.params,
      handleSetSelectAllTypeTransactionFilter:
        store.handleSetSelectAllTypeTransactionFilter,
      handleSetChangeTypeTransactionFilter:
        store.handleSetChangeTypeTransactionFilter,
    };
  });

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Tipo de transação</S.Title>
        <S.BtnAll
          activeOpacity={0.7}
          onPress={handleSetSelectAllTypeTransactionFilter}
        >
          <S.AllText>(Selecionar todas)</S.AllText>
        </S.BtnAll>
      </S.WrapperHeader>
      <S.ContainerItems>
        <S.ItemsOrigin index={0}>
          <Checkbox
            active={params?.in as boolean}
            title={EnumTypeExtract.IN}
            onPress={() => handleSetChangeTypeTransactionFilter("in")}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params?.out as boolean}
            title={EnumTypeExtract.OUT}
            onPress={() => handleSetChangeTypeTransactionFilter("out")}
          />
        </S.ItemsOrigin>
      </S.ContainerItems>
    </S.Wrapper>
  );
};
