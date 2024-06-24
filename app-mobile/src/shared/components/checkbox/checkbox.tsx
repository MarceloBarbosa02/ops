import { Pressable, View } from 'react-native';
import { Typography } from '../typography';
import { TCheckboxProps } from './checkbox.types';
import { FontAwesome } from '@expo/vector-icons';
import { useCheckbox } from './use.checkbox';
import { forwardRef, memo, useMemo } from 'react';

const Checkbox = (props: TCheckboxProps, ref: any) => {
  const {
    label,
    isChecked,
    stylesCheck,
    stylesText,
    errorMessage,
    sizeCheckIcon,
    stylesTextCheckbox,
    sizeCheckColorIcon,
    ...rest
  } = useCheckbox({ ...props });

  const checked = useMemo(() => {
    return (
      <View className={stylesCheck}>
        {isChecked ? (
          <FontAwesome
            name="check"
            size={sizeCheckIcon}
            color={sizeCheckColorIcon}
          />
        ) : null}
      </View>
    );
  }, [
    isChecked,
    stylesCheck,
    sizeCheckIcon,
    sizeCheckColorIcon,
    stylesTextCheckbox,
  ]);

  const textCheck = useMemo(() => {
    return typeof label === 'string' ? (
      <Typography
        title={label}
        className={stylesText}
        style={{ width: '90%' }}
      />
    ) : (
      label
    );
  }, [label, stylesText]);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <Pressable {...rest} ref={ref} className={stylesTextCheckbox}>
        {checked}
      </Pressable>
      {textCheck}
    </View>
  );
};

export default memo(forwardRef(Checkbox));
