import React, { useEffect, useRef } from "react";
import { ScrollView } from "react-native";

import { useCompanyStore } from "@shared/store";

import { useFilterActive } from "./hook";
import * as S from "./styles";

export const FilterActiveCard = () => {
  const refScroll = useRef<ScrollView>(null);
  const { filters_active, handleRemoveAllFilter } = useFilterActive();
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });

  useEffect(() => {
    refScroll.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  }, [filters_active]);

  return (
    <S.Wrapper>
      {filters_active.filtersArr.length > 0 && currentCompany?.uuid ? (
        <S.WrapperAct>
          <S.ActText>FILTROS ATIVOS:</S.ActText>
          <S.WrapperFiltersActive
            ref={refScroll}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {filters_active.filtersArr}
            <S.BtnActiveClear onPress={handleRemoveAllFilter}>
              <S.ActClearText>Limpar filtros</S.ActClearText>
            </S.BtnActiveClear>
          </S.WrapperFiltersActive>
        </S.WrapperAct>
      ) : null}
    </S.Wrapper>
  );
};
