import React, { useEffect } from "react";

import { useImageDefault } from "@modules/Sales/hooks/useImageDefault";
import { IProductsDetailProps } from "@shared/types/entities/Finance/interface";
import { ValidateString } from "@shared/utils";

import * as S from "./styles";

interface ProductsDetailsProps {
  data: IProductsDetailProps;
}

export const ProductsDetails = ({ data }: ProductsDetailsProps) => {
  const { imgProduct, defaultProduct, defaultTypeProduct, handleLoadImage } =
    useImageDefault();

  useEffect(() => {
    if (data?.photo) {
      handleLoadImage(data?.photo);
    }
  }, [data.photo]);

  return (
    <S.Wrapper>
      <S.WrapperImageInfo>
        {!imgProduct ? (
          <S.WrapperSizeImg>
            {defaultProduct(data?.format as string)}
          </S.WrapperSizeImg>
        ) : (
          <S.WrapperSizeImg>
            <S.ImgProduct source={{ uri: imgProduct }} resizeMode="cover" />
          </S.WrapperSizeImg>
        )}
      </S.WrapperImageInfo>
      <S.WrapperInfo>
        <S.WrapperInfoText
          isSpacing={!ValidateString(data?.description as string)}
        >
          <S.TitleProduct>{data.name}</S.TitleProduct>
          <S.WrapperValueProduct>
            {!ValidateString(data?.description as string) ? (
              <S.DescriptionLine>{`${data?.description?.slice(
                0,
                60
              )}`}</S.DescriptionLine>
            ) : (
              <S.Description>{data.description}</S.Description>
            )}
          </S.WrapperValueProduct>
          {defaultTypeProduct(data?.format as string, data.filesAmount)}
        </S.WrapperInfoText>
      </S.WrapperInfo>
    </S.Wrapper>
  );
};
