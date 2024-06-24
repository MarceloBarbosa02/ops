import React, { useEffect } from 'react';

import { ValidateString } from '@/shared/utils/validations';
import { formatCurrencyMoneyPtBr } from '@/shared/utils';
import { Typography } from '@/shared/components';

import { IProductSales } from './details.types';
import { useImageDefault } from './use-products-details';

import * as S from './details.styles';
import { View } from 'react-native';
import { OrderBumpIcon } from '@/shared/assets/components/sales';

interface ItemProductProps {
  data: IProductSales;
}

export const ItemProduct = ({ data }: ItemProductProps) => {
  const { imgProduct, defaultProduct, defaultTypeProduct, handleLoadImage } =
    useImageDefault();

  useEffect(() => {
    if (data?.photo) {
      handleLoadImage(data?.photo);
    }
  }, [data.photo]);

  return (
    <S.WrapperCardProduct>
      <S.WrapperImageInfo>
        {!imgProduct ? (
          <S.WrapperSizeImgProduct>
            {defaultProduct(data.format)}
          </S.WrapperSizeImgProduct>
        ) : (
          <S.WrapperSizeImgProduct>
            <S.ImgProduct source={{ uri: imgProduct }} resizeMode="cover" />
          </S.WrapperSizeImgProduct>
        )}
      </S.WrapperImageInfo>
      <S.WrapperInfo>
        <S.WrapperInfoText isSpacing={!ValidateString(data.description)}>
          {data?.isOrderBump && (
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <OrderBumpIcon />
              <Typography
                title="Orderbump"
                size="small"
                colorValue="primary"
                variant="subtitle"
              />
            </View>
          )}
          <Typography
            title={data.name}
            style={{ width: '70%' }}
            weight="bold"
            variant="subtitle"
          />
          <S.WrapperValueProduct>
            {!ValidateString(data.description) ? (
              <Typography
                title={`${data.description.slice(0, 60)}`}
                style={{ zIndex: -1000 }}
                variant="subtitle"
              />
            ) : (
              <Typography
                title={data.description}
                style={{ width: '65%', textAlign: 'justify' }}
                variant="subtitle"
              />
            )}
            <S.WrapperValue>
              <Typography
                title={formatCurrencyMoneyPtBr(data.price)}
                style={{ marginLeft: 8 }}
                variant="subtitle"
              />
            </S.WrapperValue>
          </S.WrapperValueProduct>
          {defaultTypeProduct(data.format, data.filesAmount)}
        </S.WrapperInfoText>
      </S.WrapperInfo>
    </S.WrapperCardProduct>
  );
};
