import React, { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTheme } from "styled-components/native";
import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FilterIcon } from "@modules/Sales/icons/Filter";
import { ButtonDefault, ButtonMaster } from "@shared/components/Buttons";
import { useSalesStore } from "@shared/store/useSalesStore";
import {
  MethodPaymentFilterCard,
  OriginFilterCard,
  StatusFilterCard,
  TypeOffersFilterCard,
} from "@modules/Sales/components/Cards/Filters";
import { SelectOptionModal } from "@shared/components/Modals/SelectOption";
import { useFiltersSearch } from "@modules/Sales/hooks/useFiltersSearch";
import { useFetchOffersAsSelectOptions } from "@modules/Sales/hooks/useFiltersOffers";
import { InputEmailAffiliate } from "@modules/Sales/components/InputsLocais";
import { CalendarButton } from "@modules/Sales/components/Buttons/Calendar";
import { ComboBoxModal } from "@modules/Sales/components/Buttons/ComboBox";
import { UTMFiltersCard } from "@modules/Sales/components/Cards/Filters/UTM";

import { useFiltersMain } from "./hooks";
import * as S from "./styles";
import { CalendarModal } from "@shared/components";

export const FiltersScreen = () => {
  const theme = useTheme();
  const { useProductsSoldAsSelectOptions } = useFiltersSearch();
  const { goBack } = useNavigation();
  const {
    params,
    modalOffers,
    modalCalendar,
    modalProducts,
    handleSelectDate,
    handleSelectOffers,
    handleSelectProducts,
    handleShowModalOffers,
    handleShowModalCalendar,
    handleShowModalProducts,
    handleDisabledFocusedButton,
  } = useSalesStore((store) => {
    return {
      params: store.params,
      modalOffers: store.modalOffers,
      modalProducts: store.modalProducts,
      modalCalendar: store.modalCalendar,
      handleSelectOffers: store.handleSelectOffers,
      handleSelectProducts: store.handleSelectProducts,
      handleShowModalOffers: store.handleShowModalOffers,
      handleShowModalProducts: store.handleShowModalProducts,
      handleShowModalCalendar: store.handleShowModalCalendar,
      handleDisabledFocusedButton: store.handleDisabledFocusedButton,
      handleSelectDate: store.handleSelectDate,
    };
  });
  const { productsOptions } = useProductsSoldAsSelectOptions();
  const { options: offerOptions } = useFetchOffersAsSelectOptions(
    params.productFilter
  );
  const {
    markedDates,
    setAuxParams,
    handleClosed,
    handleChangeDates,
    handleNavigationBack,
  } = useFiltersMain();

  useEffect(() => {
    setAuxParams(params);
  }, []);

  if (productsOptions) {
    const hasAllOption = productsOptions.find(
      (product: any) => product.value === "all"
    );
    if (!hasAllOption) {
      productsOptions.unshift({
        value: "all",
        label: "Todos",
      });
    }
  }

  if (offerOptions) {
    const hasAllOfferOptions = offerOptions.find(
      (offer: any) => offer.value === "all"
    );
    if (!hasAllOfferOptions) {
      offerOptions.unshift({
        value: "all",
        label: "Todas",
      });
    }
  }

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
        <S.Title>Filtros</S.Title>
      </S.WrapperTitle>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="none"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
            handleDisabledFocusedButton();
          }}
        >
          <View>
            <S.Container>
              <CalendarButton />

              <ComboBoxModal title="Produtos" />
              <ComboBoxModal title="Oferta" />

              <InputEmailAffiliate />

              <OriginFilterCard />

              <TypeOffersFilterCard />

              <MethodPaymentFilterCard />

              <StatusFilterCard />

              <UTMFiltersCard />

              <S.WrapperFooter>
                <S.WrapperButton cancel onPress={handleClosed}>
                  <S.WrapperButtonText cancel>Cancelar</S.WrapperButtonText>
                </S.WrapperButton>
                <S.WrapperButton onPress={handleNavigationBack}>
                  <S.WrapperButtonText>Aplicar filtros</S.WrapperButtonText>
                </S.WrapperButton>
              </S.WrapperFooter>
            </S.Container>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <SelectOptionModal
        close={handleShowModalProducts}
        data={productsOptions || []}
        isShow={modalProducts}
        onSelect={handleSelectProducts}
        title="Produtos"
      />
      <SelectOptionModal
        close={handleShowModalOffers}
        data={offerOptions || []}
        isShow={modalOffers}
        onSelect={handleSelectOffers}
        title="Ofertas"
      />
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
