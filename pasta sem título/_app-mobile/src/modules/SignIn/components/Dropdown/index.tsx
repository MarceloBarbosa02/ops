import React, { useContext, useEffect } from "react";
import { useTheme } from "styled-components/native";

import ArrowDown from "@shared/assets/icons/svg/arrow_down.svg";
import { useCurrentUserStore } from "@shared/store/useCurrentUserStore";
import { ddi_phone } from "@shared/mocks/ddi";

import * as S from "./styles";

export const Dropdown = () => {
  const theme = useTheme();
  const { handleSelectDDI, handleShowModalDDI, selectedDDI } =
    useCurrentUserStore((store) => {
      return {
        selectedDDI: store.selectedDDI,
        handleSelectDDI: store.handleSelectDDI,
        handleShowModalDDI: store.handleShowModalDDI,
      };
    });

  useEffect(() => {
    handleSelectDDI(ddi_phone[29]);
  }, []);

  return (
    <S.WrapperBtn onPress={handleShowModalDDI}>
      {selectedDDI?.dialCode ? (
        <S.SelectDefault>
          <S.SelectText>{selectedDDI?.flag}</S.SelectText>
          <ArrowDown
            width={12}
            height={12}
            stroke={theme.colors.color_neutral_60}
          />
          <S.SelectText>+{selectedDDI?.dialCode}</S.SelectText>
        </S.SelectDefault>
      ) : (
        <S.SelectDefault>
          <S.SelectText>{ddi_phone[29]?.flag}</S.SelectText>
          <ArrowDown
            width={12}
            height={12}
            stroke={theme.colors.color_neutral_60}
          />
          <S.SelectText>+{ddi_phone[29]?.dialCode}</S.SelectText>
        </S.SelectDefault>
      )}
    </S.WrapperBtn>
  );
};
