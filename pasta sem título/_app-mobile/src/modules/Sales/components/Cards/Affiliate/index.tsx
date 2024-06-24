import React from "react";

import { IAffiliate } from "@shared/types/entities";

import { ItemLineDetails } from "../../Items/ItemLineDetails";
import * as S from "./styles";

interface AffiliateProps {
  affiliate: IAffiliate;
}

export const AffiliateCard = ({ affiliate }: AffiliateProps) => {
  return (
    <S.Wrapper>
      <S.Title>Afiliado</S.Title>
      <S.WrapperInfo>
        <ItemLineDetails title="Nome" description={affiliate.name} />
        <ItemLineDetails title="E-mail" description={affiliate.email} />
      </S.WrapperInfo>
    </S.Wrapper>
  );
};
