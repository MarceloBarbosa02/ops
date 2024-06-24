import { Controller } from 'react-hook-form';

import Switch from './switch';
import { TSwitchControlProps } from './switch.types';

const SelectControl = ({
  control,
  name,
  title,
  isLoading,
}: TSwitchControlProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Switch
          title={title}
          isLoading={isLoading}
          defaultValue={value}
          onValueChange={onChange}
        />
      )}
    />
  );
};

export default SelectControl;
