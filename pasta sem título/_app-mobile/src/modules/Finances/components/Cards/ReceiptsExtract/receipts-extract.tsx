import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { Dimensions } from "react-native";

import { useFinancesStore } from "@shared/store";
import { format } from "@shared/utils";

import { TReceiptExtractProps } from "./receipts-types";
import { ItemLine } from "../Items/ItemLine";
import { useReceipts } from "./use-receipts";
import { DetailsTransactionModalScreen } from "../../Modal/extract-details/extract-details";

import * as S from "./styles";

const { width } = Dimensions.get("window");

export const ReceiptsExtract = ({ data }: TReceiptExtractProps) => {
  const refModal = useRef<Modalize>(null);
  const { validCategory } = useReceipts(data.isFuture, data.isCanceled);
  const { handleSetDetail } = useFinancesStore((store) => {
    return {
      handleSetDetail: store.handleSetUUIDDetail,
    };
  });

  const handleShowModalDetail = () => {
    if (data.isDisabled) return;

    handleSetDetail(data.uuid);
    refModal.current?.open();
  };

  return (
    <S.Wrapper>
      <S.WrapperExtract>
        <ItemLine label="Código" title={`${data?.code}`} />
        <ItemLine label="Descrição" title={data?.title} description="" />
        <ItemLine label="Categoria" title={validCategory(data.category)} />
        {data?.createdAt && (
          <ItemLine
            label="Data"
            title={format.dateToString(
              new Date(data.createdAt),
              "dd/MM/yyyy 'às' HH:mm"
            )}
          />
        )}
        <ItemLine
          label="Valor"
          title={format.money(data.value)}
          out={data.type}
          canceled={data.isCanceled}
        />
        <S.ButtonDetail onPress={handleShowModalDetail}>
          <S.TitleButton>Detalhes</S.TitleButton>
        </S.ButtonDetail>
      </S.WrapperExtract>
      <DetailsTransactionModalScreen refActionSheet={refModal} />
    </S.Wrapper>
  );
};
