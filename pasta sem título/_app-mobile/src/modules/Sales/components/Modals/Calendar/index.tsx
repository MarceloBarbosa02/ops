import React, { useState } from "react";
import Modal from "react-native-modal";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView } from "react-native";
import { Calendar, LocaleConfig, DateData } from "react-native-calendars";
import { useTheme } from "styled-components/native";

import { ButtonDefault } from "@shared/components/Buttons";
import { Checkbox } from "@shared/components/Selects";
import { dates_default } from "@modules/Sales/mocks/calendar";
import { CalendarDayProps } from "@modules/Sales/model/CalendarModel";
import { useSalesStore } from "@shared/store/useSalesStore";

import { ptBR } from "./localeConfig";
import * as S from "./styles";

interface CalendarModalProps {
  title: string;
  isShow: boolean;
  close: () => void;
  markedDates: MarkedDateProps;
  onDayPress(day: DateData): void;
}

export interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export const CalendarModal = ({
  title,
  isShow,
  close,
  markedDates,
  onDayPress,
}: CalendarModalProps) => {
  const theme = useTheme();
  const [selectItem, setSelectItem] = useState(0);
  const { handleSelectDate } = useSalesStore((store) => {
    return {
      handleSelectDate: store.handleSelectDate,
    };
  });

  const handleSelectDateCheck = (item: CalendarDayProps) => {
    setSelectItem(item.id);
    handleSelectDate(item.date);
  };

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
        <S.WrapperHeader>
          <S.Title>{title}</S.Title>
          <S.WrapperBtnClose onPress={close}>
            <AntDesign
              name="close"
              size={18}
              color={theme.colors.color_neutral_100}
            />
          </S.WrapperBtnClose>
        </S.WrapperHeader>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <S.Wrapper>
            <Calendar
              renderArrow={(direction) => (
                <Feather
                  size={24}
                  color={theme.colors.color_neutral_100}
                  name={direction === "left" ? "chevron-left" : "chevron-right"}
                />
              )}
              onDayPress={onDayPress}
              minDate={"2023-01-02"}
              theme={{
                backgroundColor: theme.colors.color_neutral_0,
                calendarBackground: theme.colors.color_neutral_0,
                textSectionTitleColor: theme.colors.color_neutral_60,
                selectedDayBackgroundColor: theme.colors.color_blue_40,
                selectedDayTextColor: theme.colors.color_neutral_100,
                todayTextColor: theme.colors.color_blue_40,
                dayTextColor: theme.colors.color_neutral_70,
                textDayHeaderFontFamily: theme.fonts.Satoshi.medium,
                textDayHeaderFontSize: theme.fonts.sizes.medium,
                textDayHeaderFontWeight: "500",
                textMonthFontFamily: theme.fonts.Satoshi.medium,
                textMonthFontSize: theme.fonts.sizes.mediumX,
                textMonthFontWeight: "700",
                textInactiveColor: theme.colors.color_neutral_40,
                monthTextColor: theme.colors.color_neutral_100,
              }}
              markingType="period"
              markedDates={markedDates}
            />
            <S.WrapperSelects>
              {dates_default.map((item) => (
                <S.ItemSelects key={item.id.toString()}>
                  <Checkbox
                    title={item.label}
                    active={item.id === selectItem}
                    onPress={() => handleSelectDateCheck(item)}
                  />
                </S.ItemSelects>
              ))}
            </S.WrapperSelects>

            <S.WrapperBtn>
              <ButtonDefault title="Confirmar" variant="info" onPress={close} />
            </S.WrapperBtn>
          </S.Wrapper>
        </ScrollView>
      </S.Content>
    </Modal>
  );
};
