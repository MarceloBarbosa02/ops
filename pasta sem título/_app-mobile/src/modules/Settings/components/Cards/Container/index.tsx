import React, { useMemo } from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import BusinessIcon from "@shared/assets/icons/svg/management.svg";
import User from "@shared/assets/icons/svg/user.svg";
import Pen from "@shared/assets/icons/svg/editionProfile/pen.svg";
import ImgEmpty from "@shared/assets/images/svg/sales-empty-state.svg";
import ImgEmptyDark from "@shared/assets/images/svg/sales-empty-state-dark.svg";

import { EmptyCards } from "@shared/components/Cards";
import { useFetchCompanies } from "@shared/hooks/useCompany";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { ICompany } from "@shared/types";

import { PerfilCard } from "../Perfil";
import { BusinessCard } from "../Business";
import * as S from "./styles";

interface ContainerProps {
  title: string;
  handleNavigation(): void;
}

export const ContainerCard = ({ title, handleNavigation }: ContainerProps) => {
  const theme = useTheme();
  const { data: companies } = useFetchCompanies();
  const { data: userData } = useFetchMe();

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.WrapperInfo>
          <S.WrapperIcon>
            {title === "Perfil" ? (
              <User stroke={theme.colors.color_neutral_100} />
            ) : (
              <BusinessIcon stroke={theme.colors.color_neutral_100} />
            )}
          </S.WrapperIcon>
          <S.Title>{title}</S.Title>
        </S.WrapperInfo>
        <S.BtnEdit
          onPress={handleNavigation}
          disabled={
            title === "Perfil"
              ? false
              : userData?.verificationStatus === "PENDING_DATA"
          }
        >
          {title === "Perfil" ? (
            <Pen width={16} height={16} />
          ) : (
            <Feather
              name="plus"
              size={16}
              color={
                userData?.verificationStatus === "PENDING_DATA"
                  ? theme.colors.color_blue_20
                  : theme.colors.color_blue_40
              }
            />
          )}
        </S.BtnEdit>
      </S.WrapperHeader>
      {title === "Perfil" ? (
        <PerfilCard />
      ) : (
        <>
          {companies && companies?.data?.length > 0 ? (
            <>
              {companies?.data?.map((item: ICompany) => (
                <BusinessCard key={item.uuid} data={item} />
              ))}
            </>
          ) : (
            <EmptyCards
              title="Não há registros..."
              description="Quando surgirem vendas, você poderá gerenciá-las por aqui."
              image={theme.theme === "dark" ? <ImgEmptyDark /> : <ImgEmpty />}
            />
          )}
        </>
      )}
    </S.Wrapper>
  );
};
