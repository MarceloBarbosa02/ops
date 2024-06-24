import React, { useCallback, useEffect, useMemo, useState } from "react";
import { cleanMask } from "masks-br";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { useSearchCompanyByDocument } from "@modules/Settings/hooks/useBusiness";
import { LayoutSettings } from "@modules/Settings/components/LayoutSettings";
import { PersonTypes, useBusinessStore } from "@shared/store/useBusinessStore";
import { ValidateCNPJ } from "@shared/utils/validations";
import { LineDescription } from "@shared/components/Items/LineDescription";
import { showToast } from "@shared/store/useToastStore";
import { ICompany } from "@shared/types/entities/Company";

import * as S from "./styles";

export const SearchCompanyScreen = () => {
  const theme = useTheme();
  const { navigate, goBack } = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [companyNumber, setCompanyNumber] = useState<string>("");
  const [isNotError, setIsNotError] = useState<string>("");
  const { mutate, isLoading } = useSearchCompanyByDocument();
  const { handleSearchCompany, handleAddDocument, handleChangePerson } =
    useBusinessStore((store) => {
      return {
        handleSearchCompany: store.handleSearchCompany,
        handleAddDocument: store.handleAddDocument,
        handleChangePerson: store.handleChangePerson,
      };
    });

  useEffect(() => {
    handleChangePerson("LEGAL_PERSON" as PersonTypes);
  }, []);

  const handleSearchCNPJ = () => {
    mutate(cleanMask(companyNumber), {
      onSuccess({ data }) {
        handleSearchCompany(data);
        navigate("CheckInfo");
        handleAddDocument(cleanMask(companyNumber));
      },
      onError(error: any) {
        handleSearchCompany({} as ICompany);
        setIsNotError(error?.response?.data?.message);
        error?.response?.data?.message !== "CNPJ não encontrado" &&
          showToast({
            type: "error",
            message: error?.response?.data?.message || "Ops! Algo deu errado.",
          });
      },
    });
  };

  const isError = useMemo(() => {
    if (cleanMask(companyNumber).length === 14 && ValidateCNPJ(companyNumber)) {
      return true;
    }
    if (cleanMask(companyNumber).length > 13) {
      return ValidateCNPJ(companyNumber);
    }
    setIsNotError("");
    return true;
  }, [companyNumber]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <LayoutSettings
      title="Novo negócio"
      nameIcon="search"
      titleSave="Pesquisar"
      submit={handleSearchCNPJ}
      handleNavigateBack={goBack}
      isDisabled={!ValidateCNPJ(companyNumber)}
      isLoading={isLoading}
    >
      <S.Wrapper>
        <S.Container>
          <S.Title>CNPJ</S.Title>
          <S.InputMask
            type="cnpj"
            onChangeText={(text) => setCompanyNumber!(text)}
            value={companyNumber}
            placeholder="Digite um CNPJ"
            placeholderTextColor={theme.colors.color_neutral_40}
            isError={!isError}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            isFocused={isFocused}
            editable={!isLoading}
          />
          {!isError && <S.Text>CNPJ inválido</S.Text>}
          {isNotError === "CNPJ não encontrado" && (
            <>
              <S.Text>{isNotError}</S.Text>
              <S.ContainerCard>
                <S.TitleCard>
                  Porque não consigo localizar minha empresa?
                </S.TitleCard>
                <LineDescription title="Empresa criada recentemente" />
                <LineDescription title="Empresa encerrada" />
                <LineDescription title="Situação cadastral inativa" />
              </S.ContainerCard>
            </>
          )}
        </S.Container>
      </S.Wrapper>
    </LayoutSettings>
  );
};
