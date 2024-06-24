import { Controller } from 'react-hook-form';
import Select from './select';
import { TSelectControlProps } from './select.types';

const SelectControl = ({
  label,
  options,
  name,
  type,
  selectedValue,
  control,
}: TSelectControlProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Select
          label={label}
          type={type}
          options={options}
          selectedValue={`${selectedValue} ${value}`}
          onValueChange={onChange}
        />
      )}
    />
  );
};

export default SelectControl;
