import React from "react";
import { Keyboard } from "react-native";

import { Checkbox } from "@shared/components/Selects";
import { StatusFilterProps, useSalesStore } from "@shared/store/useSalesStore";

import * as S from "./styles";

export const StatusFilterCard = () => {
  const {
    params,
    handleSetSelectAllStatusFilter,
    handleSetChangeStatusFilter,
  } = useSalesStore((store) => {
    return {
      params: store.params,
      handleSetSelectAllStatusFilter: store.handleSetSelectAllStatusFilter,
      handleSetChangeStatusFilter: store.handleSetChangeStatusFilter,
    };
  });

  const handleSelectOne = (status: StatusFilterProps) => {
    Keyboard.dismiss();
    handleSetChangeStatusFilter(status);
  };

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Status</S.Title>
        <S.BtnAll
          activeOpacity={0.7}
          onPress={() => {
            Keyboard.dismiss();
            handleSetSelectAllStatusFilter();
          }}
        >
          <S.AllText>(Selecionar todos)</S.AllText>
        </S.BtnAll>
      </S.WrapperHeader>
      <S.ContainerItems>
        <S.ItemsOrigin index={0}>
          <Checkbox
            active={params.statusFilter?.approved as boolean}
            title="Aprovado"
            onPress={() => handleSelectOne("approved")}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params.statusFilter?.pending as boolean}
            title="Pendente"
            onPress={() => handleSelectOne("pending")}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params.statusFilter?.expired as boolean}
            title="Cancelado"
            onPress={() => handleSelectOne("expired")}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params.statusFilter?.refused as boolean}
            title="Recusado"
            onPress={() => handleSelectOne("refused")}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params.statusFilter?.refunded as boolean}
            title="Estornado"
            onPress={() => handleSelectOne("refunded")}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            active={params.statusFilter?.chargeback as boolean}
            title="Chargeback"
            onPress={() => handleSelectOne("chargeback")}
          />
        </S.ItemsOrigin>
      </S.ContainerItems>
    </S.Wrapper>
  );
};
