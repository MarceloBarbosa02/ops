import React from "react";

import { Checkbox } from "@shared/components/Selects";
import { EnumCategoryExtract } from "@shared/types/enum/EnumExtract";
import { useFinancesStore } from "@shared/store";

import * as S from "./styles";

export const CategoryFilterCard = () => {
  const {
    params,
    handleSetSelectAllCategoryFilter,
    handleSetChangeCategoryFilter,
  } = useFinancesStore((store) => {
    return {
      params: store.params,
      handleSetSelectAllCategoryFilter: store.handleSetSelectAllCategoryFilter,
      handleSetChangeCategoryFilter: store.handleSetChangeCategoryFilter,
    };
  });

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Categoria</S.Title>
        <S.BtnAll
          activeOpacity={0.7}
          onPress={handleSetSelectAllCategoryFilter}
        >
          <S.AllText>(Selecionar todas)</S.AllText>
        </S.BtnAll>
      </S.WrapperHeader>
      <S.ContainerItems>
        <S.ItemsOrigin index={0}>
          <Checkbox
            active={params?.withdrawal as boolean}
            title={EnumCategoryExtract.WITHDRAWAL}
            onPress={() => handleSetChangeCategoryFilter("withdrawal")}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params?.taxas as boolean}
            title={EnumCategoryExtract.TAX}
            onPress={() => handleSetChangeCategoryFilter("taxas")}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params?.chargeback as boolean}
            title={EnumCategoryExtract.CHARGEBACK}
            onPress={() => handleSetChangeCategoryFilter("chargeback")}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params?.refunded as boolean}
            title={EnumCategoryExtract.REFUND}
            onPress={() => handleSetChangeCategoryFilter("refunded")}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params?.adjust as boolean}
            title={EnumCategoryExtract.AD_HOC}
            onPress={() => handleSetChangeCategoryFilter("adjust")}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params?.comission as boolean}
            title={EnumCategoryExtract.COMISSION}
            onPress={() => handleSetChangeCategoryFilter("comission")}
          />
        </S.ItemsOrigin>
      </S.ContainerItems>
    </S.Wrapper>
  );
};
