import React, { useState } from "react";

import ArrowDown from "@shared/assets/icons/svg/sales/arrow_down.svg";
import ArrowTop from "@shared/assets/icons/svg/sales/arrow_top.svg";
import { ItensReceipts } from "@shared/components/Items";
import { format } from "@shared/utils/formatters";
import { IWithdrawal } from "@shared/types";

import * as S from "./styles";

interface ReceiptProps {
  data: IWithdrawal;
}

export const Receipts = ({ data }: ReceiptProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <S.Wrapper>
      <S.WrapperItems>
        <ItensReceipts title={data.code} type="cod" />
        <ItensReceipts title={format.money(data.value)} type="value" />
        <ItensReceipts title={data.status} type="status" />
        {isShow && (
          <>
            <ItensReceipts
              title={format.dateToString(
                new Date(data.createdAt),
                " dd/MM/yyyy 'às' HH:mm"
              )}
              type="createdAt"
            />
            <ItensReceipts
              title={
                data.releasedAt
                  ? format.dateToString(
                      new Date(data.releasedAt),
                      " dd/MM/yyyy 'às' HH:mm"
                    )
                  : "--"
              }
              type="releasedAt"
            />
          </>
        )}
      </S.WrapperItems>
      <S.WrapperFooter>
        <S.BtnShow
          onPress={() => setIsShow((prev) => !prev)}
          activeOpacity={0.7}
        >
          {isShow ? (
            <>
              <S.Title>Ver menos</S.Title>
              <ArrowTop />
            </>
          ) : (
            <>
              <S.Title>Ver mais</S.Title>
              <ArrowDown />
            </>
          )}
        </S.BtnShow>
      </S.WrapperFooter>
    </S.Wrapper>
  );
};
