import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { ActivityIndicator } from "react-native";

import Pen from "@shared/assets/icons/svg/editionProfile/pen.svg";
import { SwitchButton } from "@shared/components";
import { format } from "@shared/utils/formatters";
import {
  useSearchCompanyById,
  useUpdateStatusCompany,
} from "@modules/Settings/hooks/useBusiness";
import { CStatus, ICompany } from "@shared/types";

import { useBusinessCard } from "./hook/useBusiness";
import * as S from "./styles";

export interface BusinessProps {
  data: ICompany;
}

export const BusinessCard = ({ data }: BusinessProps) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState<boolean>(false);
  const { isLoading } = useUpdateStatusCompany();
  const {
    isLoadingById,
    handleEditCompany,
    handleToggleStatus,
    handleUpdateCompanyDefault,
  } = useBusinessCard({ data });

  useEffect(() => {
    setIsActive(data?.status === CStatus.ACTIVE ? true : false);
  }, [data]);

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.WrapperInfo>
          <S.BtnUpdate activeOpacity={0.7} onPress={handleUpdateCompanyDefault}>
            <AntDesign
              name={data?.isDefault ? "star" : "staro"}
              size={24}
              color={theme.colors.color_yellow_40}
            />
          </S.BtnUpdate>

          <S.Title>
            {(data?.nickname || data?.fantasyName).length > 13
              ? `${(data?.nickname || data?.fantasyName).substring(0, 13)}...`
              : data?.nickname || data?.fantasyName}
          </S.Title>
        </S.WrapperInfo>
        <S.WrapperBadge>
          <S.TextBadge>SÓCIO</S.TextBadge>
        </S.WrapperBadge>
      </S.WrapperHeader>
      <S.Container>
        <S.WrapperItems>
          <S.Label>
            {data?.document.length > 11 ? "Nome Fantasia" : "Nome"}
          </S.Label>
          <S.Description>{data?.fantasyName}</S.Description>
        </S.WrapperItems>
        <S.WrapperItems>
          <S.Label>{data?.document.length > 11 ? "CNPJ" : "CPF"}</S.Label>
          <S.Description>
            {data?.document.length > 11
              ? format.cnpj(data?.document)
              : format.cpf(data?.document)}
          </S.Description>
        </S.WrapperItems>
        <S.WrapperItems>
          <S.Label>Status</S.Label>
          <SwitchButton
            active={isActive}
            onPress={() =>
              handleToggleStatus(
                data?.status === "ACTIVE" ? "DISABLED" : "ACTIVE"
              )
            }
            isDefault={data?.isDefault}
            disabled={data?.isDefault}
            loading={isLoading}
          />

          <S.TextSwitch>{data?.status ? "Ativo" : "Inativo"}</S.TextSwitch>
        </S.WrapperItems>
        <S.BtnEdit onPress={handleEditCompany}>
          {isLoadingById ? (
            <ActivityIndicator />
          ) : (
            <>
              <Pen stroke={theme.colors.color_neutral_70} />
              <S.TextButton>Editar</S.TextButton>
            </>
          )}
        </S.BtnEdit>
      </S.Container>
    </S.Wrapper>
  );
};
