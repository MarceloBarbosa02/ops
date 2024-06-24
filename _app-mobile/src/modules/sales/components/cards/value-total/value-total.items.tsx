import { Typography } from '@/shared/components';
import { format } from '@/shared/utils';

import { TValuesTotalItems } from './value-total.types';
import * as S from './value-total.styles';
import {
  CommissionIcon,
  TotalSalesIcon,
} from '@/shared/assets/components/sales';

export const ValueTotalItem = ({ title, value }: TValuesTotalItems) => {
  return (
    <S.WrapperItem>
      <S.WrapperItemHeader>
        {title === 'TOTAL' ? <TotalSalesIcon /> : <CommissionIcon />}
        <Typography title={title} weight="medium" variant="subtitle" />
      </S.WrapperItemHeader>
      <Typography
        title={value ? format.money(value) : '...'}
        weight="bold"
        variant="subtitle"
      />
    </S.WrapperItem>
  );
};
