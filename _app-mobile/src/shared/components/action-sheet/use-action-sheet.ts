import { useState } from 'react';
import { TSelectOptions } from '../select/select.types';

export const useActionSheet = (defaultValue: TSelectOptions) => {
  const [optionSelect, setOptionSelect] = useState<TSelectOptions>(
    defaultValue ?? {}
  );

  const handleChangeOptionSelect = (text: TSelectOptions) => {
    setOptionSelect(text);
  };

  return {
    optionSelect,
    handleChangeOptionSelect,
  };
};
