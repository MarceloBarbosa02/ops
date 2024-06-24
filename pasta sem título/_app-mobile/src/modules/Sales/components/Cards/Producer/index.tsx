import React from "react";

import { IProducer } from "@shared/types/entities";

import { ItemLineDetails } from "../../Items/ItemLineDetails";
import * as S from "./styles";

interface ProducerProps {
  producer: IProducer;
}

export const ProducerCard = ({ producer }: ProducerProps) => {
  return (
    <S.Wrapper>
      <S.Title>Produtor</S.Title>
      <S.WrapperInfo>
        <ItemLineDetails title="Nome" description={producer.name} />
        <ItemLineDetails title="E-mail" description={producer.email} />
      </S.WrapperInfo>
    </S.Wrapper>
  );
};
