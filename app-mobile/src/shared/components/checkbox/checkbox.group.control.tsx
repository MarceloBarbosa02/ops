import { View } from 'react-native';
import { Controller } from 'react-hook-form';
import Checkbox from './checkbox';
import { TCheckboxControlProps } from './checkbox.types';
import { classNamesStylesCheckboxGroup } from './checkbox.styles';

const CheckboxGroupControl = ({
  options,
  control,
  colorValue,
  alignFlex = 'column',
  name,
}: TCheckboxControlProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View className={classNamesStylesCheckboxGroup({ alignFlex })}>
          {options?.map((item) => (
            <Checkbox
              key={item.title}
              label={`{item.title}`}
              isChecked={value === item.value}
              colorValue={colorValue ?? item.colorValue}
              onPress={() => onChange(item.value)}
            />
          ))}
        </View>
      )}
    />
  );
};

export default CheckboxGroupControl;
