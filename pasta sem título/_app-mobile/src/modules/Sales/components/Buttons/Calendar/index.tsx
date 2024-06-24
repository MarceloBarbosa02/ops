import React, { useState } from "react";
import { Keyboard } from "react-native";
import { format } from "date-fns";
import { RFPercentage } from "react-native-responsive-fontsize";

import Clear from "@shared/assets/icons/svg/sales/Clear.svg";
import { useSalesStore } from "@shared/store/useSalesStore";

import * as S from "./styles";

export const CalendarButton = () => {
  const {
    params,
    isFocusedButton,
    handleCleanSelectDate,
    handleShowModalCalendar,
    handleFocusedButton,
    handleDisabledFocusedButton,
  } = useSalesStore(store => {
    return {
      params: store.params,
      isFocusedButton: store.isFocusedButton,
      handleCleanSelectDate: store.handleCleanSelectDate,
      handleShowModalCalendar: store.handleShowModalCalendar,
      handleFocusedButton: store.handleFocusedButton,
      handleDisabledFocusedButton: store.handleDisabledFocusedButton,
    };
  });

  const handleShowModal = () => {
    handleDisabledFocusedButton();
    handleFocusedButton("period");
    Keyboard.dismiss();
    handleShowModalCalendar();
  };

  return (
    <S.Wrapper>
      <S.WrapperCalendar>
        <S.TitleCalendar>Período</S.TitleCalendar>
        <S.WrapperBtnCalendar
          onPress={handleShowModal}
          isActive={isFocusedButton.period}
        >
          <S.WrapperInputCalendar>
            <S.TextBtnCalendar>
              {`${format(params.dateFilter?.[0], "dd/MM/yyyy")} / ${format(
                params.dateFilter?.[1],
                "dd/MM/yyyy"
              )}`}
            </S.TextBtnCalendar>
          </S.WrapperInputCalendar>
          <S.WrapperBtnClear onPress={handleCleanSelectDate}>
            <Clear width={RFPercentage(3)} height={RFPercentage(3)} />
          </S.WrapperBtnClear>
        </S.WrapperBtnCalendar>
      </S.WrapperCalendar>
    </S.Wrapper>
  );
};
