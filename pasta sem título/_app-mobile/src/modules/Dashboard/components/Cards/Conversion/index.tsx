import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { useConversion } from "@modules/Dashboard/hooks";
import { EnumConversion } from "@shared/types/enum/EnumConversion";

import { ConversionItem } from "../../Items";
import * as S from "./styles";

interface ConversionProps {
  title: string;
}

export const Conversion = ({ title }: ConversionProps) => {
  const theme = useTheme();
  const { useFetchConversion } = useConversion();

  const { data: conversionData } = useFetchConversion();

  return (
    <S.Wrapper>
      <S.WrapperTop>
        <S.WrapperIcon>
          <Feather
            name="shopping-bag"
            size={16}
            color={theme.colors.color_neutral_30}
          />
        </S.WrapperIcon>
        <S.Title>{title}</S.Title>
      </S.WrapperTop>
      <S.Container>
        <ConversionItem
          title={EnumConversion.CARTAO}
          totalPaid={conversionData?.creditCardApprovedCount}
          total={conversionData?.creditCardCount}
        />
        <ConversionItem
          title={EnumConversion.PIX}
          totalPaid={conversionData?.pixApprovedCount}
          total={conversionData?.pixCount}
        />
        <ConversionItem
          title={EnumConversion.BOLETO}
          totalPaid={conversionData?.bankSlipApprovedCount}
          total={conversionData?.bankSlipCount}
        />
      </S.Container>
    </S.Wrapper>
  );
};
