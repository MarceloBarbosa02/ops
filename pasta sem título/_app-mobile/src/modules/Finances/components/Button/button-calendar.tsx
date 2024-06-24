import React, { useState } from "react";
import { format } from "date-fns";
import { RFPercentage } from "react-native-responsive-fontsize";

import Clear from "@shared/assets/icons/svg/sales/Clear.svg";
import Calendar from "@shared/assets/icons/svg/finance/calendar.svg";
import { useFinancesStore } from "@shared/store";

import * as S from "./styles";

export const CalendarExtractButton = () => {
  const { params, isOpenModal, handleShowModalCalendar } = useFinancesStore(
    (store) => {
      return {
        params: store.params,
        isOpenModal: store.isOpenModal,
        handleShowModalCalendar: store.handleShowModalCalendar,
      };
    }
  );

  const handleShowModal = () => {
    handleShowModalCalendar();
  };

  return (
    <S.WrapperCalendar>
      <S.WrapperBtnCalendar onPress={handleShowModal} isActive={isOpenModal}>
        <Calendar />
        <S.TextBtnCalendar>
          {`${format(params.dateFilter?.[0], "dd/MM/yyyy")}  |  ${format(
            params.dateFilter?.[1],
            "dd/MM/yyyy"
          )}`}
        </S.TextBtnCalendar>
        <S.WrapperBtnClear onPress={() => {}}>
          <Clear width={RFPercentage(3)} height={RFPercentage(3)} />
        </S.WrapperBtnClear>
      </S.WrapperBtnCalendar>
    </S.WrapperCalendar>
  );
};
