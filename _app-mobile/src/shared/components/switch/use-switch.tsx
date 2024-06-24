import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { TSwitchProps } from './switch.types';

export const useSwitch = (props: TSwitchProps) => {
  const colors = useTheme();
  const {
    title,
    size = 'sm',
    variant = 'primary',
    isLoading = false,
    defaultValue,
    onValueChange,
    spinner = <ActivityIndicator size={'small'} color={colors.gray[50]} />,
    ...rest
  } = props;
  const [active, setActive] = useState<boolean>(defaultValue as boolean);

  const handleToggleActive = () => {
    if (typeof onValueChange === 'function') {
      onValueChange(!defaultValue);
    }
    setActive((prevState) => !prevState);
  };

  return {
    ...rest,
    title,
    size,
    active,
    variant,
    spinner,
    isLoading,
    handleToggleActive,
  };
};
