import React, { forwardRef, memo } from 'react';

import { DashIcon, FinancesIcon, SalesIcon, PlusIcon } from '@/shared/assets';

import { Typography } from '../typography';
import { ButtonNavigateTabBarProps } from './navigate-tab-bar-types';

import * as S from './navigate-tab-bar-styles';

const ButtonNavigateTabBar = (
  { title, focused }: ButtonNavigateTabBarProps,
  ref: any
) => {
  return (
    <S.Wrapper>
      <S.WrapperIcon>
        {title === 'Dashboard' && <DashIcon focused={focused} />}
        {title === 'Vendas' && <SalesIcon focused={focused} />}
        {title === 'Finanças' && <FinancesIcon focused={focused} />}
        {title === 'Mais' && <PlusIcon focused={focused} />}
      </S.WrapperIcon>
      <Typography
        title={title}
        variant="subtitle"
        align="center"
        weight="medium"
        colorValue={focused ? 'primary' : 'neutral-medium'}
      />
    </S.Wrapper>
  );
};

export default memo(forwardRef(ButtonNavigateTabBar));
