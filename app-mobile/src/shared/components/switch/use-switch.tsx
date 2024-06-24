import { useMemo, useState } from 'react';
import { TSwitchProps } from './switch.types';
import { ActivityIndicator } from 'react-native';
import { classNamesSwitch, classNamesSwitchDot } from './switch.styles';
import { colors } from '@/shared/theme';

export const useSwitch = (props: TSwitchProps) => {
  const {
    title,
    size = 'lg',
    variant = 'primary',
    isLoading = false,
    defaultValue,
    onValueChange,
    spinner = <ActivityIndicator size={'small'} color={colors.gray[50]} />,
  } = props;
  const [active, setActive] = useState<boolean>(defaultValue as boolean);

  const handleToggleActive = () => {
    if (typeof onValueChange === 'function') {
      onValueChange(!defaultValue);
    }
    setActive((prevState) => !prevState);
  };

  const stylesSwitch = useMemo(
    () =>
      classNamesSwitch({
        size,
        variant,
        active,
      }),
    [size, active, variant]
  );

  const stylesSwitchDot = useMemo(
    () =>
      classNamesSwitchDot({
        size,
        variant,
      }),
    [size, variant]
  );

  return {
    title,
    spinner,
    isLoading,
    stylesSwitch,
    stylesSwitchDot,
    handleToggleActive,
  };
};
