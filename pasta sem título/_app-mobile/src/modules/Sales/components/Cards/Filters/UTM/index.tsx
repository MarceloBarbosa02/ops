import React from "react";
import { Keyboard } from "react-native";

import { ItemUTMFilter } from "@modules/Sales/components/Items/ItemUTMFilter";

import { useUTMFilters } from "./hook";
import * as S from "./styles";

export const UTMFiltersCard = () => {
  const { utmFilters, handleUTMFiltersAll, handleUTMFiltersOne } =
    useUTMFilters();

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>UTM</S.Title>
        <S.BtnAll
          activeOpacity={0.7}
          onPress={() => {
            Keyboard.dismiss();
            handleUTMFiltersAll();
          }}
        >
          <S.AllText>(Selecionar todos)</S.AllText>
        </S.BtnAll>
      </S.WrapperHeader>
      <S.WrapperUTM>
        <ItemUTMFilter
          title="Campaign"
          name="utmCampaignValue"
          isDisabled={utmFilters.utmCampaign?.isActive}
          handleChangeUTM={() => {
            Keyboard.dismiss();
            handleUTMFiltersOne("utmCampaign");
          }}
        />
        <ItemUTMFilter
          title="Content"
          name="utmContentValue"
          isDisabled={utmFilters.utmContent?.isActive}
          handleChangeUTM={() => {
            Keyboard.dismiss();
            handleUTMFiltersOne("utmContent");
          }}
        />
        <ItemUTMFilter
          title="Medium"
          name="utmMediumValue"
          isDisabled={utmFilters.utmMedium?.isActive}
          handleChangeUTM={() => {
            Keyboard.dismiss();
            handleUTMFiltersOne("utmMedium");
          }}
        />
        <ItemUTMFilter
          title="Source"
          name="utmSourceValue"
          isDisabled={utmFilters.utmSource?.isActive}
          handleChangeUTM={() => {
            Keyboard.dismiss();
            handleUTMFiltersOne("utmSource");
          }}
        />
        <ItemUTMFilter
          title="SRC"
          name="utmSrcValue"
          isDisabled={utmFilters.utmSrc?.isActive}
          handleChangeUTM={() => {
            Keyboard.dismiss();
            handleUTMFiltersOne("utmSrc");
          }}
        />
        <ItemUTMFilter
          title="Term"
          isBorder
          name="utmTermValue"
          isDisabled={utmFilters.utmTerm?.isActive}
          handleChangeUTM={() => {
            Keyboard.dismiss();
            handleUTMFiltersOne("utmTerm");
          }}
        />
      </S.WrapperUTM>
    </S.Wrapper>
  );
};
