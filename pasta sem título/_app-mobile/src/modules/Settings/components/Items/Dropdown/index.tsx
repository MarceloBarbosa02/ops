import React, { useEffect } from "react";
import { useTheme } from "styled-components/native";

import ArrowDown from "@shared/assets/icons/svg/arrow_down.svg";
import { useCurrentUserStore } from "@shared/store/useCurrentUserStore";
import { ddi_phone } from "@shared/mocks/ddi";

import * as S from "./styles";

export const Dropdown = () => {
  const theme = useTheme();
  const { handleSelectDDI, selected, handleShowModalDDI } = useCurrentUserStore(
    (store) => {
      return {
        selected: store.selectedDDI,
        handleSelectDDI: store.handleSelectDDI,
        handleShowModalDDI: store.handleShowModalDDI,
      };
    }
  );

  useEffect(() => {
    handleSelectDDI(ddi_phone[29]);
  }, []);

  return (
    <S.WrapperBtn onPress={handleShowModalDDI}>
      {selected.dialCode ? (
        <S.SelectDefault>
          <S.SelectText>{selected.flag}</S.SelectText>
          <ArrowDown
            width={12}
            height={12}
            stroke={theme.colors.color_neutral_60}
          />
          <S.SelectText>+{selected.dialCode}</S.SelectText>
        </S.SelectDefault>
      ) : (
        <S.SelectDefault>
          <S.SelectText>{ddi_phone[29].flag}</S.SelectText>
          <ArrowDown
            width={12}
            height={12}
            stroke={theme.colors.color_neutral_60}
          />
          <S.SelectText>+{ddi_phone[29].dialCode}</S.SelectText>
        </S.SelectDefault>
      )}
    </S.WrapperBtn>
  );
};
