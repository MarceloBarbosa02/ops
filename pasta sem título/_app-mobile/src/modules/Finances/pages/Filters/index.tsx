import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import Slider from "@shared/assets/icons/svg/sales/Slider_03.svg";
import {
  TypeTransactionFilterCard,
  CategoryFilterCard,
} from "@modules/Finances/components/Cards/Filter";
import { ButtonMaster } from "@shared/components";
import { FilterIcon } from "@modules/Sales/icons/Filter";
import { CalendarExtractButton } from "@modules/Finances/components/Button";
import { useFinancesStore } from "@shared/store";
import { CalendarModal } from "@shared/components/Calendar/calendar";

import { useFiltersExtract } from "./hooks";
import * as S from "./styles";

export const FiltersExtractScreen = () => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { markedDates, handleClosed, setAuxParams, handleNavigationBack } =
    useFiltersExtract();
  const { params, modalCalendar, handleSelectDate, handleShowModalCalendar } =
    useFinancesStore((store) => {
      return {
        params: store.params,
        modalCalendar: store.modalCalendar,
        handleSelectDate: store.handleSelectDate,
        handleShowModalCalendar: store.handleShowModalCalendar,
      };
    });

  useEffect(() => {
    setAuxParams(params);
  }, [params]);

  return (
    <S.Wrapper>
      <S.WrapperTitle>
        <S.WrapperHeaderIcon>
          <S.WrapperIcon>
            <FilterIcon />
          </S.WrapperIcon>
          <S.WrapperBtnClose onPress={goBack}>
            <AntDesign
              name="close"
              size={18}
              color={theme.colors.color_neutral_100}
            />
          </S.WrapperBtnClose>
        </S.WrapperHeaderIcon>
        <S.HeaderTitle>Filtrar</S.HeaderTitle>
      </S.WrapperTitle>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Container>
          <CalendarExtractButton />
          <CategoryFilterCard />
          <TypeTransactionFilterCard />
        </S.Container>
      </ScrollView>
      <S.WrapperFooter>
        <ButtonMaster
          title="Limpar"
          variant="secondary"
          type="link"
          sizeWidth={46}
          onPress={handleClosed}
        />
        <ButtonMaster
          title="Aplicar"
          variant="success"
          sizeWidth={46}
          icon={<Slider width={RFPercentage(3)} height={RFPercentage(3)} />}
          positionIcon="left"
          onPress={handleNavigationBack}
        />
      </S.WrapperFooter>
      <CalendarModal
        close={handleShowModalCalendar}
        isShow={modalCalendar}
        markedDates={markedDates}
        defaultDate={params.dateFilter}
        handleSelectDate={handleSelectDate}
      />
    </S.Wrapper>
  );
};
