import { Controller } from 'react-hook-form';

import Radio from './radio';
import { TRadioControlProps } from './radio.types';

const RadioControl = ({
  control,
  colorValue,
  title = '',
  description = '',
  name,
}: TRadioControlProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Radio
          title={title}
          description={description}
          select={value}
          colorValue={colorValue}
          onPress={() => onChange(value)}
        />
      )}
    />
  );
};

export default RadioControl;
