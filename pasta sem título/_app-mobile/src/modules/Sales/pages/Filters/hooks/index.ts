import { addDays } from "date-fns";
import { useState } from "react";
import { DateData } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

import { MarkedDateProps } from "@modules/Sales/components/Modals/Calendar";
import { generateInterval } from "@modules/Sales/components/Modals/Calendar/generateInterval";
import { useSalesStore } from "@shared/store/useSalesStore";
import { IParamsProps } from "@shared/types/entities";
import { useFiltersSearch } from "@modules/Sales/hooks/useFiltersSearch";

export const useFiltersMain = () => {
  const { goBack } = useNavigation();
  const { useFetchSalesList, useFetchSalesTotals } = useFiltersSearch();
  const [lastSelectDate, setLastSelectDate] = useState<DateData>(
    {} as DateData
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [auxParams, setAuxParams] = useState<IParamsProps>({} as IParamsProps);
  const { handleSelectDate, handlePreviousPage, handleSetGoBackParams } =
    useSalesStore((store) => {
      return {
        handleSelectDate: store.handleSelectDate,
        handlePreviousPage: store.handlePreviousPage,
        handleSetGoBackParams: store.handleSetGoBackParams,
      };
    });
  const { refetch: refetchSales } = useFetchSalesTotals();
  const { refetch: refetchList } = useFetchSalesList();

  const handleNavigationBack = () => {
    handlePreviousPage(1);
    refetchSales();
    refetchList();
    goBack();
  };

  const handleClosed = () => {
    handleSetGoBackParams(auxParams);
    goBack();
  };

  const handleChangeDates = (date: DateData) => {
    let start = !lastSelectDate.timestamp ? date : lastSelectDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval.interval);

    handleSelectDate([
      addDays(interval.datesInterval[0], 1),
      addDays(interval.datesInterval[interval.datesInterval.length - 1], 1),
    ]);
  };

  return {
    markedDates,
    setAuxParams,
    handleClosed,
    handleChangeDates,
    handleNavigationBack,
  };
};
