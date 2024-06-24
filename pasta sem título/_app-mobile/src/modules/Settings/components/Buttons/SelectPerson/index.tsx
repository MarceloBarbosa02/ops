import React from "react";
import { PersonTypes, useBusinessStore } from "@shared/store";

import * as S from "./styles";

export const SelectPerson = () => {
  const { person, handleChangePerson } = useBusinessStore((store) => {
    return {
      person: store.person,
      handleChangePerson: store.handleChangePerson,
    };
  });

  const options = [
    {
      id: "PHYSICAL_PERSON",
      label: "Pessoa Física",
      value: "PHYSICAL_PERSON",
    },
    {
      id: "LEGAL_PERSON",
      label: "Pessoa Jurídica",
      value: "LEGAL_PERSON",
    },
  ];

  return (
    <S.Container>
      <S.Label>Identificação</S.Label>
      <S.Text>Selecione o tipo de atividade que se adequa ao negócio.</S.Text>
      <S.Content>
        {options.map((item) => (
          <S.SelectButton
            key={item.id}
            onPress={() => handleChangePerson(item.value as PersonTypes)}
            activeOpacity={0.7}
          >
            <S.WrapperDot isActive={person === item.value}>
              {person === item.value && <S.Dot />}
            </S.WrapperDot>
            <S.TextSelectButton>{item.label}</S.TextSelectButton>
          </S.SelectButton>
        ))}
      </S.Content>
    </S.Container>
  );
};
