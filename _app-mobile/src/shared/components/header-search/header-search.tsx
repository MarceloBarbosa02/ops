import { Feather } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import { useHeaderSearch } from './use-header-search';

import * as S from './header-search.styles';
import { THeaderSearch } from './header-search.types';
import { useEffect, useRef } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { format } from '@/shared/utils/formatters';
import { Button } from '../button';
import FiltersIcon from '@/shared/assets/components/generics/filters';
import { Typography } from '../typography';

const { width } = Dimensions.get('window');

export const HeaderSearch = (props: THeaderSearch) => {
  const refScroll = useRef<ScrollView>(null);
  const theme = useTheme();
  const {
    label,
    params,
    isColor,
    currentCompany,
    filters_active,
    handleInputBlur,
    handleInputFocus,
    handleNavigation,
    handleRemoveAllFilters,
    handleSetMainSearchFilter,
  } = useHeaderSearch({ ...props });

  useEffect(() => {
    refScroll.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  }, [filters_active]);

  return (
    <S.WrapperHeader>
      <S.WrapperInput>
        <S.WrapperInputSearch color={isColor}>
          <Feather name="search" size={RFPercentage(3)} color={isColor} />
          <S.InputSearch
            value={params.mainSearchFilter}
            maxFontSizeMultiplier={1.1}
            onChangeText={handleSetMainSearchFilter}
            placeholder={label}
            placeholderTextColor={theme.gray[500]}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            editable={currentCompany?.uuid ? true : false}
          />
        </S.WrapperInputSearch>
        <Button
          title=""
          sizeWidth={17}
          size="medium"
          colorValue="primary"
          startContent={<FiltersIcon />}
          onPress={handleNavigation}
          disabled={!currentCompany?.uuid}
        />
      </S.WrapperInput>
      {filters_active.filtersArr.length > 0 && currentCompany?.uuid ? (
        <S.WrapperFilter>
          <S.WrapperAct>
            <Typography title={`FILTROS\nATIVOS:`} variant="subtitle" />
            <S.WrapperFiltersActive
              ref={refScroll}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 12 }}>
              {filters_active.filtersArr}
              <Button
                title="Limpar filtros"
                variant="link"
                onPress={handleRemoveAllFilters}
              />
            </S.WrapperFiltersActive>
          </S.WrapperAct>
        </S.WrapperFilter>
      ) : null}
    </S.WrapperHeader>
  );
};
