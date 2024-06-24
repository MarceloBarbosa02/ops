import React, { useContext } from "react";
import { useTheme } from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import Modal from "react-native-modal";
import AntDesign from "@expo/vector-icons/AntDesign";

import { ItemDDI } from "@modules/SignIn/models/phone";
import { ddi_phone } from "@shared/mocks/ddi";
import { useCurrentUserStore } from "@shared/store/useCurrentUserStore";

import * as S from "./styles";

interface DropDDIProps {
  isShow: boolean;
}

export const DropDDIModal = ({ isShow }: DropDDIProps) => {
  const theme = useTheme();
  const { handleSelectDDI, handleShowModalDDI } = useCurrentUserStore(
    (store) => {
      return {
        handleSelectDDI: store.handleSelectDDI,
        handleShowModalDDI: store.handleShowModalDDI,
      };
    }
  );

  const onItemPress = (item: ItemDDI): void => {
    handleSelectDDI(item);
    handleShowModalDDI();
  };

  return (
    <Modal
      isVisible={isShow}
      onBackdropPress={handleShowModalDDI}
      animationIn="fadeIn"
      animationInTiming={100}
      animationOut="fadeOut"
      animationOutTiming={100}
    >
      <S.Wrapper>
        <S.WrapperHeader>
          <S.WrapperBtnClose onPress={handleShowModalDDI}>
            <AntDesign
              name="close"
              size={18}
              color={theme.colors.color_neutral_100}
            />
          </S.WrapperBtnClose>
        </S.WrapperHeader>
        <ScrollView>
          <View>
            {ddi_phone.map((item, index) => (
              <S.Select
                key={index.toString()}
                onPress={() => onItemPress(item)}
              >
                <S.TextItem>{item.flag}</S.TextItem>
                <S.TextItem>{item.name}</S.TextItem>
                <S.SelectText>+{item.dialCode}</S.SelectText>
              </S.Select>
            ))}
          </View>
        </ScrollView>
      </S.Wrapper>
    </Modal>
  );
};
