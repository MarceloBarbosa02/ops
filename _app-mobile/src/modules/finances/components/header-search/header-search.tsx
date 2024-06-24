import { useTheme } from 'styled-components/native';

import { Button, Typography } from '@/shared/components';
import { useHeaderExtract } from './use-header-extract';
import { ExtractIcon } from '@/shared/assets/components/finances';

import * as S from './header-search.styles';

export const HeaderExtract = () => {
  const theme = useTheme();
  const { extract, headerSales, isPendingExtract, handleConfirmExtract } =
    useHeaderExtract();

  return (
    <S.WrapperHeader>
      <S.WrapperTitle>
        <S.WrapperInfo>
          <Typography title="Extrato" weight="bold" size="large" />
          {Number(extract?.meta.total) > 0 ? (
            <S.WrapperDot>
              <Typography
                title={`${extract?.meta.total ?? 0}`}
                weight="bold"
                variant="subtitle"
              />
            </S.WrapperDot>
          ) : null}
        </S.WrapperInfo>
        <Button
          title="Exportar"
          radius="full"
          variant="outlined"
          textWeightButton="regular"
          endContent={
            <ExtractIcon
              isActive={extract?.meta.total !== 0 || isPendingExtract}
            />
          }
          colorValue="primary"
          onPress={handleConfirmExtract}
          isLoading={isPendingExtract}
          disabled={extract?.meta.total === 0}
          style={{
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderColor: theme.gray[300],
          }}
        />
      </S.WrapperTitle>
      {headerSales}
    </S.WrapperHeader>
  );
};
