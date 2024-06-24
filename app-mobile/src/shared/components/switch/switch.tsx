import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../typography';
import { useSwitch } from './use-switch';
import { TSwitchProps } from './switch.types';
import { forwardRef, memo, useMemo } from 'react';

const Switch = (props: TSwitchProps, ref: any) => {
  const {
    title,
    spinner,
    isLoading,
    stylesSwitch,
    stylesSwitchDot,
    handleToggleActive,
  } = useSwitch({ ...props });

  const buttonSwitch = useMemo(() => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleToggleActive}
        className={stylesSwitch}
      >
        {isLoading ? spinner : <View className={stylesSwitchDot} />}
      </TouchableOpacity>
    );
  }, [isLoading, spinner, stylesSwitchDot, stylesSwitch]);

  return (
    <View className="flex-row gap-2" ref={ref}>
      {buttonSwitch}
      <Typography title={title} />
    </View>
  );
};

export default memo(forwardRef(Switch));
