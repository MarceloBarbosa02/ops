import React, { useCallback, useMemo, useState } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { Dimensions, Keyboard } from "react-native";

import Slider from "@shared/assets/icons/svg/sales/Slider_03.svg";
import { useCompanyStore } from "@shared/store";
import { useSalesStore } from "@shared/store/useSalesStore";
import { ButtonMaster } from "@shared/components/Buttons";
import { format } from "@shared/utils";

import { useFilterActive } from "../../Cards/Filters/FilterActive/hook";
import * as S from "./styles";

const { width } = Dimensions.get("screen");

export const HeaderParallax = () => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const { navigate } = useNavigation();
  const { filters_active } = useFilterActive();
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });
  const { params, handleSetMainSearchFilter } = useSalesStore((store) => {
    return {
      params: store.params,
      handleSetMainSearchFilter: store.handleSetMainSearchFilter,
    };
  });

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleNavigation = () => {
    navigate("Filters");
    Keyboard.dismiss();
  };

  const isColor = useMemo(() => {
    return isFocused
      ? theme.colors.color_blue_40
      : theme.colors.color_neutral_30;
  }, [isFocused, theme]);

  return (
    <S.Wrapper>
      <S.WrapperInputEmail color={isColor}>
        <Feather name="search" size={RFPercentage(3)} color={isColor} />
        <S.InputEmail
          value={params.mainSearchFilter}
          maxFontSizeMultiplier={1.1}
          onChangeText={handleSetMainSearchFilter}
          placeholder={format.limitarTamanhoString(
            "Buscar por CPF, transação ou nome",
            width + 20
          )}
          placeholderTextColor={theme.colors.color_neutral_60}
          editable={!!currentCompany?.uuid}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </S.WrapperInputEmail>
      <ButtonMaster
        title=""
        sizeWidth={17}
        variant="primary"
        icon={<Slider width={RFPercentage(3)} height={RFPercentage(3)} />}
        positionIcon="center"
        onPress={handleNavigation}
        disabled={!currentCompany?.uuid}
      />
    </S.Wrapper>
  );
};
