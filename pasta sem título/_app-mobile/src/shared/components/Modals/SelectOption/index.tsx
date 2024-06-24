import React from "react";
import Modal from "react-native-modal";

import { ISelectOptionProps } from "@shared/types/entities/Generic";

import * as S from "./styles";

export const SelectOptionModal = ({
  title,
  isShow,
  data,
  close,
  onSelect,
}: ISelectOptionProps) => {
  return (
    <Modal
      isVisible={isShow}
      onBackdropPress={close}
      animationIn="fadeIn"
      animationInTiming={100}
      animationOut="fadeOut"
      animationOutTiming={100}
    >
      <S.Content>
        <S.ContainerTop>
          <S.Title>{title}</S.Title>
        </S.ContainerTop>
        <S.Wrapper>
          <S.ContainerButtons>
            {data.map((item, index) => (
              <S.BtnSelect
                key={String(index)}
                onPress={() => {
                  onSelect(item);
                  close();
                }}
              >
                <S.BtnText>{item.label}</S.BtnText>
              </S.BtnSelect>
            ))}
          </S.ContainerButtons>
        </S.Wrapper>
      </S.Content>
    </Modal>
  );
};
