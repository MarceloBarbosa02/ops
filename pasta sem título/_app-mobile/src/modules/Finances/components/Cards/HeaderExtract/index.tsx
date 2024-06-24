import { Feather } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import { Dimensions } from "react-native";

import Slider from "@shared/assets/icons/svg/sales/Slider_03.svg";
import { ButtonMaster } from "@shared/components/Buttons";
import { useFinancesStore } from "@shared/store";

import { useHeaderExtracts } from "./hook/useHeaderExtract";
import { ButtonExport } from "../../Button";
import * as S from "./styles";

const { width } = Dimensions.get("screen");

export const HeaderExtract = () => {
  const theme = useTheme();
  const {
    isColor,
    extractData,
    quantitySales,
    isLoadingTransfers,
    handleInputFocus,
    handleInputBlur,
    handleNavigation,
    handleConfirmExtract,
  } = useHeaderExtracts();
  const { params, handleSetMainSearchFilter } = useFinancesStore((store) => {
    return {
      params: store.params,
      handleSetMainSearchFilter: store.handleSetMainSearchFilter,
    };
  });

  return (
    <S.WrapperHeader>
      <S.WrapperTitle>
        <S.WrapperInfo>
          <S.Title>Extrato</S.Title>
          {quantitySales}
        </S.WrapperInfo>
        <ButtonExport
          title="Exportar"
          onPress={handleConfirmExtract}
          isLoading={isLoadingTransfers}
          disabled={extractData?.meta.total === 0}
        />
      </S.WrapperTitle>
      <S.WrapperInput>
        <S.WrapperInputSearch color={isColor}>
          <Feather name="search" size={RFPercentage(3)} color={isColor} />
          <S.InputSearch
            value={params.mainSearchFilter}
            maxFontSizeMultiplier={1.1}
            onChangeText={handleSetMainSearchFilter}
            placeholder="Buscar"
            placeholderTextColor={theme.colors.color_neutral_60}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </S.WrapperInputSearch>
        <ButtonMaster
          title=""
          sizeWidth={17}
          variant="primary"
          icon={<Slider width={RFPercentage(3)} height={RFPercentage(3)} />}
          positionIcon="center"
          onPress={handleNavigation}
        />
      </S.WrapperInput>
    </S.WrapperHeader>
  );
};
