import { useCallback, useMemo, useState } from 'react';
import { useTheme } from 'styled-components/native';

import { THeaderSearch } from './header-search.types';

import { useCompanyStore } from '@/shared/store';

export const useHeaderSearch = (props: THeaderSearch) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const {
    label,
    params,
    filters_active,
    handleNavigation,
    handleRemoveAllFilters,
    handleSetMainSearchFilter,
  } = props;

  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const isColor = useMemo(() => {
    return isFocused ? theme.blue[400] : theme.gray[300];
  }, [isFocused, theme]);

  return {
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
  };
};
