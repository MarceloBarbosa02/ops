import { View } from 'react-native';
import { Controller } from 'react-hook-form';
import Checkbox from './checkbox';
import { TCheckboxControlProps } from './checkbox.types';
import { classNamesStylesCheckboxGroup } from './checkbox.styles';

const CheckboxControl = ({ control, name, ...rest }: TCheckboxControlProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Checkbox
          {...rest}
          isChecked={value}
          onPress={() => onChange(!value)}
        />
      )}
    />
  );
};

export default CheckboxControl;
