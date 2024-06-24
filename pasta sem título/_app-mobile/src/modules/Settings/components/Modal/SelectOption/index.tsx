import React, { RefObject } from "react";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";
import { useTheme } from "styled-components/native";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

type OptionType = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

interface SelectOptionProps {
  refModal: RefObject<Modalize>;
  options: OptionType[];
  option: string;
  title: string;
  onSelect(data: string): void;
  setIsActive(bool: boolean): void;
}

import * as S from "./styles";

export const SelectOptionModal = ({
  refModal,
  options,
  title,
  option,
  onSelect,
  setIsActive,
}: SelectOptionProps) => {
  const theme = useTheme();

  const handleClosed = () => {
    setIsActive(false);
  };

  return (
    <Portal>
      <Modalize
        ref={refModal}
        adjustToContentHeight
        modalStyle={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: theme.colors.color_neutral_0,
        }}
        onClosed={handleClosed}
      >
        <S.Wrapper>
          <S.WrapperHeader>
            <S.Title>{title}</S.Title>
          </S.WrapperHeader>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
            }}
          >
            {options.map((item) => (
              <S.ButtonSelect
                key={item.label}
                onPress={() => {
                  onSelect(item.value);
                  handleClosed();
                }}
              >
                <Feather
                  name="check"
                  size={24}
                  color={
                    item.value === option
                      ? theme.colors.color_neutral_40
                      : theme.colors.color_neutral_0
                  }
                />
                <S.TitleSelect select={item.value === option}>
                  {item.label}
                </S.TitleSelect>
              </S.ButtonSelect>
            ))}
            <S.Spacer />
          </ScrollView>
        </S.Wrapper>
      </Modalize>
    </Portal>
  );
};
