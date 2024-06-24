import {
  Button,
  CalendarModal,
  Input,
  Select,
  Typography,
} from '@/shared/components';

import * as S from './form.styles';
import { format } from 'date-fns';
import { CalendarIcon, ClosedIcon } from '@/shared/assets/components';
import { useTheme } from 'styled-components/native';
import { useFormContext } from 'react-hook-form';
import { useFilterSales } from '../../screens/modal/use-filter-sales';
import { useSalesStore } from '../../store';
import { useEffect, useMemo } from 'react';
import { useHistory } from '../history/use-history';

export const HeaderForm = () => {
  const theme = useTheme();
  const methods = useFormContext();
  const { params, handleShowModalCalendar } = useFilterSales();
  const { productsOptions, offerOptions } = useHistory();
  const { handleSelectProducts } = useSalesStore((store) => {
    return {
      handleSelectProducts: store.handleSelectProducts,
    };
  });

  const product = methods.watch('productFilter');

  useEffect(() => {
    if (product) {
      handleSelectProducts(product);
    }
  }, [product]);

  return (
    <S.WrapperFormHeader>
      <S.WrapperButtonCalendar
        onPress={handleShowModalCalendar}
        activeOpacity={0.7}>
        <CalendarIcon isActive />
        <Typography
          title={`${format(params?.dateFilter?.[0]!, 'dd/MM/yyyy')}  |  ${format(
            params?.dateFilter?.[1]!,
            'dd/MM/yyyy'
          )}`}
        />
        <ClosedIcon />
      </S.WrapperButtonCalendar>
      <Select
        control={methods.control}
        name="productFilter"
        options={productsOptions}
        label="Produtos"
      />
      <Select
        control={methods.control}
        name="offerFilter"
        options={offerOptions}
        label="Ofertas"
        // disabled={isDisabled}
      />
      <Input
        control={methods.control}
        name="emailAffiliate"
        label="E-mail do afiliado"
        placeholder="Insira o e-mail"
        keyboardType="email-address"
      />
    </S.WrapperFormHeader>
  );
};
