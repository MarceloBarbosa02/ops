import React, { useCallback, useEffect, useState } from "react";
import Modal from "react-native-modal";
import Feather from "@expo/vector-icons/Feather";
import { ScrollView, TouchableOpacity } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useTheme } from "styled-components/native";
import { format } from "date-fns";

import { ButtonMaster } from "@shared/components/Buttons";
import { CalendarDayProps } from "@modules/Sales/model/CalendarModel";

import { ptBR } from "./locale-config";
import { TCalendarModalProps } from "./calendar-types";
import { generateInterval } from "./generate-interval";
import { formatDate } from "./calendar-utils";
import { useCalendar } from "./use-calendar";
import { dates_default } from "./calendar-dates-default";
import * as S from "./styles";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

let calendarDate = new Date();

export const CalendarModal = (props: TCalendarModalProps) => {
  const theme = useTheme();
  const [current, setCurrent] = useState<Date>(calendarDate);
  const [currentDate, setCurrentDate] = useState<string>(
    format(current, "yyyy-MM-dd")
  );

  const {
    isShow,
    defaultDate,
    markedDates,
    close,
    setMarkedDates,
    handleSelectDate,
    handleChangeDates,
  } = useCalendar({ ...props });

  const handleSetDefaultDate = (date: Date[]) => {
    setCurrent(date[0]);
    setCurrentDate(format(date[0], "yyyy-MM-dd"));

    const interval = generateInterval(
      formatDate(date[0]),
      formatDate(date[1]),
      false
    );

    setMarkedDates(interval.interval);
  };

  const handleSelectDateCheck = (item: CalendarDayProps) => {
    handleSelectDate(item.date);

    setCurrent(item.date[0]);
    setCurrentDate(format(item.date[0], "yyyy-MM-dd"));

    const interval = generateInterval(
      formatDate(item.date[0]),
      formatDate(item.date[1]),
      false
    );

    setMarkedDates(interval.interval);
  };

  useEffect(() => {
    handleSetDefaultDate(defaultDate);
  }, []);

  const renderHeader = () => {
    const year = current?.getFullYear();

    return (
      <S.WrapperHeaderCalendar>
        <S.TitleCalendar>
          {ptBR.monthNames[current?.getMonth() as number]} {year}
        </S.TitleCalendar>
        <S.WrapperArrows>
          <TouchableOpacity onPress={subtractMonth}>
            <Feather
              size={24}
              name="chevron-left"
              color={theme.colors.color_neutral_100}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={addMonth}>
            <Feather
              size={24}
              name="chevron-right"
              color={theme.colors.color_neutral_100}
            />
          </TouchableOpacity>
        </S.WrapperArrows>
      </S.WrapperHeaderCalendar>
    );
  };

  const addMonth = useCallback(() => {
    const newMonth = new Date(current.setMonth(current.getMonth() + 1));

    setCurrentDate(format(newMonth, "yyyy-MM-dd"));
    setCurrent(newMonth);
  }, [current]);

  const subtractMonth = useCallback(() => {
    const newMonth = new Date(current.setMonth(current.getMonth() - 1));

    setCurrentDate(format(newMonth, "yyyy-MM-dd"));
    setCurrent(newMonth);
  }, [current]);

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <S.Wrapper>
            <Calendar
              initialDate={currentDate}
              hideArrows
              renderHeader={renderHeader}
              onDayPress={handleChangeDates}
              minDate={"2023-01-02"}
              theme={{
                backgroundColor: theme.colors.color_neutral_0,
                calendarBackground: theme.colors.color_neutral_0,
                textSectionTitleColor: theme.colors.color_neutral_60,
                selectedDayBackgroundColor: theme.colors.blue_l600_d300,
                selectedDayTextColor: theme.colors.color_neutral_100,
                todayTextColor: theme.colors.blue_l600_d300,
                dayTextColor: theme.colors.gray_l700_d200,
                textDayHeaderFontFamily: theme.fonts.Satoshi.medium,
                textDayHeaderFontSize: theme.fonts.sizes.medium,
                textDayHeaderFontWeight: "500",
                textMonthFontFamily: theme.fonts.Satoshi.medium,
                textMonthFontSize: theme.fonts.sizes.mediumX,
                textMonthFontWeight: "700",
                textInactiveColor: theme.colors.gray_l300_d600,
                monthTextColor: theme.colors.color_neutral_100,
              }}
              markingType="period"
              markedDates={markedDates}
            />

            <S.WrapperSelects>
              {dates_default.map((item) => (
                <S.ButtonSelect onPress={() => handleSelectDateCheck(item)}>
                  <S.ButtonSelectText>{item.label}</S.ButtonSelectText>
                </S.ButtonSelect>
              ))}
            </S.WrapperSelects>

            <S.WrapperBtn>
              <ButtonMaster
                title="Cancelar"
                variant="secondary"
                type="link"
                onPress={close}
                sizeWidth={45}
              />
              <ButtonMaster
                title="Confirmar"
                variant="primary"
                onPress={close}
                sizeWidth={45}
              />
            </S.WrapperBtn>
          </S.Wrapper>
        </ScrollView>
      </S.Content>
    </Modal>
  );
};
