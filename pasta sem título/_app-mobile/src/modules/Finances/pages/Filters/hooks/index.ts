import { useState } from "react";
import { DateData } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

import { MarkedDateProps } from "@modules/Sales/components/Modals/Calendar";
import { IParamsExtractProps } from "@shared/types/entities/Finance/interface";
import { useExtractFilter } from "@modules/Finances/hook/useExtractFilter";
import { useFinancesStore } from "@shared/store";

export const useFiltersExtract = () => {
  const { goBack } = useNavigation();
  const { useFetchExtract } = useExtractFilter();
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [auxParams, setAuxParams] = useState<IParamsExtractProps>(
    {} as IParamsExtractProps
  );
  const { handleSelectDate, handlePreviousPage, handleSetGoBackParams } =
    useFinancesStore((store) => {
      return {
        handleSelectDate: store.handleSelectDate,
        handlePreviousPage: store.handlePreviousPage,
        handleSetGoBackParams: store.handleSetGoBackParams,
      };
    });
  const { refetch: refetchExtract } = useFetchExtract();

  const handleNavigationBack = () => {
    handlePreviousPage(1);
    setTimeout(() => {
      refetchExtract();
    }, 200);
    goBack();
  };

  const handleClosed = () => {
    handleSetGoBackParams(auxParams);
    goBack();
  };

  return {
    markedDates,
    setAuxParams,
    handleClosed,
    handleNavigationBack,
  };
};
