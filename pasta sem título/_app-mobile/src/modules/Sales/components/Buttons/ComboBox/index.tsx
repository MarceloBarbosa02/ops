import React from "react";
import { Keyboard } from "react-native";
import { useTheme } from "styled-components/native";

import Arrow from "@shared/assets/icons/svg/arrow_down.svg";
import { useSalesStore } from "@shared/store/useSalesStore";

import * as S from "./styles";

interface ComboBoxProps {
  title: string;
}

export const ComboBoxModal = ({ title }: ComboBoxProps) => {
  const theme = useTheme();
  const {
    offersFilterSelect,
    productFilterSelect,
    isFocusedButton,
    handleShowModalProducts,
    handleShowModalOffers,
    handleFocusedButton,
    handleDisabledFocusedButton,
  } = useSalesStore(store => {
    return {
      offersFilterSelect: store.offersFilterSelect,
      productFilterSelect: store.productFilterSelect,
      isFocusedButton: store.isFocusedButton,
      handleShowModalProducts: store.handleShowModalProducts,
      handleShowModalOffers: store.handleShowModalOffers,
      handleFocusedButton: store.handleFocusedButton,
      handleDisabledFocusedButton: store.handleDisabledFocusedButton,
    };
  });

  const handleShowModal = () => {
    handleDisabledFocusedButton();
    Keyboard.dismiss();
    if (title === "Oferta") {
      handleFocusedButton("offer");
      handleShowModalOffers();
    } else {
      handleFocusedButton("product");
      handleShowModalProducts();
    }
  };

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {title === "Oferta" ? (
        <S.WrapperBtnProduct
          onPress={handleShowModal}
          isActive={isFocusedButton.offer}
        >
          <S.TextBtnProduct>
            {offersFilterSelect.label || "Todas"}
          </S.TextBtnProduct>
          <Arrow stroke={theme.colors.color_neutral_60} />
        </S.WrapperBtnProduct>
      ) : (
        <S.WrapperBtnProduct
          onPress={handleShowModal}
          isActive={isFocusedButton.product}
        >
          <S.TextBtnProduct>
            {productFilterSelect.label || "Todos"}
          </S.TextBtnProduct>

          <Arrow stroke={theme.colors.color_neutral_60} />
        </S.WrapperBtnProduct>
      )}
    </S.Wrapper>
  );
};
