import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { SelectPerson } from "@modules/Settings/components/Buttons/SelectPerson";
import { useBusinessStore } from "@shared/store/useBusinessStore";
import { LayoutSettings } from "@modules/Settings/components/LayoutSettings";
import { AlertCard } from "@modules/Settings/components/Cards/Alert";

import * as S from "./styles";

export const NewBusinessScreen = () => {
  const { goBack, navigate } = useNavigation();
  const { data: userData } = useFetchMe();
  const { person, handleAddDocument, handleChangePerson } = useBusinessStore(
    (store) => {
      return {
        person: store.person,
        handleAddDocument: store.handleAddDocument,
        handleChangePerson: store.handleChangePerson,
      };
    }
  );

  useEffect(() => {
    handleChangePerson("");
  }, []);

  const handleNextStep = () => {
    if (person === "PHYSICAL_PERSON") {
      navigate("CheckInfo");
      handleAddDocument(userData?.document ?? '');
      return;
    }
    navigate("SearchCompany");
  };

  return (
    <LayoutSettings
      title="Novo negócio"
      titleSave="Prosseguir"
      submit={handleNextStep}
      handleNavigateBack={goBack}
      isDisabled={person === ""}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        <S.Container>
          <S.Content>
            <SelectPerson />
          </S.Content>
          {person === "PHYSICAL_PERSON" && (
            <AlertCard text="Ao optar pelo cadastro da empresa como Pessoa Física, há um limite anual de R$ 28.559,70 no faturamento da sua empresa." />
          )}
        </S.Container>
      </ScrollView>
    </LayoutSettings>
  );
};
