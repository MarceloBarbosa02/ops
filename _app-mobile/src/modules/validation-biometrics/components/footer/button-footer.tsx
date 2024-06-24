import React from 'react';

import * as S from './button-footer.styles';
import { Button } from '@/shared/components';

interface ButtonFooterProps {
  handleNavigation(): void;
  handleNavigationBack(): void;
}

export const ButtonFooter = ({
  handleNavigation,
  handleNavigationBack,
}: ButtonFooterProps) => {
  return (
    <S.Wrapper>
      <Button
        title="Continuar"
        colorValue="primary"
        size="small"
        textWeightButton="bold"
        onPress={handleNavigation}
      />
      <Button
        title="Cancelar"
        colorValue="tertiary"
        size="small"
        textWeightButton="bold"
        onPress={handleNavigationBack}
      />
    </S.Wrapper>
  );
};
