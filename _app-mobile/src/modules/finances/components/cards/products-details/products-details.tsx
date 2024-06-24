import React, { useEffect } from 'react';
import { Image } from 'expo-image';
import * as S from './products-details.styles';
import { Typography } from '@/shared/components';
import { IProductsDetailProps } from '@/shared/queries/extract/extract.interfaces';
import { ValidateString } from '@/shared/utils/validations';
import { useImageDefault } from './use-products-details';
import { BLUR_HASH } from '@/shared/constants/generic';
import { useTheme } from 'styled-components/native';

interface ProductsDetailsProps {
  data: IProductsDetailProps;
}

export const ProductsDetails = ({ data }: ProductsDetailsProps) => {
  const theme = useTheme();
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
          <Image
            source={`${imgProduct}`}
            placeholder={BLUR_HASH}
            contentFit="cover"
            transition={1000}
            style={{
              width: 90,
              height: 90,
              borderRadius: 8,
            }}
          />
        )}
      </S.WrapperImageInfo>
      <S.WrapperInfo>
        <S.WrapperInfoText
          isSpacing={!ValidateString(data?.description as string)}>
          <Typography title={data.name} weight="bold" size="small" />
          <S.WrapperValueProduct>
            {!ValidateString(data?.description as string) ? (
              <Typography
                title={`${data?.description?.slice(0, 60)}`}
                size="small"
              />
            ) : (
              <Typography title={`${data.description}`} size="small" />
            )}
          </S.WrapperValueProduct>
          {defaultTypeProduct(data?.format as string, data.filesAmount)}
        </S.WrapperInfoText>
      </S.WrapperInfo>
    </S.Wrapper>
  );
};
