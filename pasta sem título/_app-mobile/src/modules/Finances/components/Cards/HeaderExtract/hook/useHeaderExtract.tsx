import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTheme } from "styled-components/native";
import { Keyboard } from "react-native";
import { MMKV } from "react-native-mmkv";

import { useExtractFilter } from "@modules/Finances/hook/useExtractFilter";
import { formatParams } from "@modules/Finances/utils/format-params";
import { showToast, useFinancesStore } from "@shared/store";
import { useSalesStore } from "@shared/store/useSalesStore";
import { minutesDifference10Minutes } from "@shared/utils/minutesDiference";

const storage = new MMKV();
import * as S from "../styles";

export const useHeaderExtracts = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { useExportTransfers, useFetchExtract } = useExtractFilter();
  const { mutate: mutateExportTransfers, isLoading: isLoadingTransfers } =
    useExportTransfers();
  const { params } = useFinancesStore((store) => {
    return {
      params: store.params,
    };
  });
  const { data: extractData, isFetching } = useFetchExtract();

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleNavigation = () => {
    navigate("FiltersExtract");
    Keyboard.dismiss();
  };

  const handleConfirmExtract = async () => {
    const time = storage.getNumber("@timeExport");

    const queryString = formatParams(params);

    // if (minutesDifference10Minutes(new Date(time as number))) {
    //   return showToast({
    //     type: "info",
    //     message: "Aguarde 10 minutos para exportar novamente.",
    //   });
    // }

    mutateExportTransfers(queryString, {
      onSuccess: async ({ data }) => {
        showToast({
          type: "success",
          message:
            data.message ??
            "Em instantes você receberá no seu e-mail o relatório com os dados solicitados.",
        });
        setIsDisabled(true);
        storage.set("@timeExport", new Date().getTime());
      },
      onError(error: any) {
        showToast({
          type: "error",
          message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
        });
      },
    });
  };

  const isColor = useMemo(() => {
    return isFocused
      ? theme.colors.color_blue_40
      : theme.colors.color_neutral_30;
  }, [isFocused, theme]);

  const quantitySales = useMemo(() => {
    if (isFetching || extractData?.data.length === 0) {
      return <></>;
    }

    if (String(extractData?.meta.total).length <= 2) {
      return (
        <S.WrapperDot size={24}>
          <S.TitleCount>{`${extractData?.meta.total}`}</S.TitleCount>
        </S.WrapperDot>
      );
    }
    if (String(extractData?.meta.total).length > 2) {
      return (
        <S.WrapperDot size={32}>
          <S.TitleCount>{`${extractData?.meta.total}`}</S.TitleCount>
        </S.WrapperDot>
      );
    }
  }, [isFetching, extractData?.meta.total]);

  return {
    isColor,
    isFocused,
    isDisabled,
    extractData,
    quantitySales,
    isLoadingTransfers,
    handleInputFocus,
    handleInputBlur,
    handleNavigation,
    handleConfirmExtract,
  };
};
