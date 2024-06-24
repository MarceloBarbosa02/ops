import { Controller } from 'react-hook-form';
import Input from './input';
import { TInputControlProps } from './input.types';

const InputControl = ({ control, name, ...rest }: TInputControlProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Input {...rest} value={value} onChangeText={onChange} />
      )}
    />
  );
};

export default InputControl;
