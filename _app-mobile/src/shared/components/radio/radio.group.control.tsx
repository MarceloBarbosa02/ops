import Radio from './radio';
import { TRadioControlProps } from './radio.types';
import { Controller } from 'react-hook-form';

import * as S from './radio.styles';

const RadioGroup = ({
  options,
  control,
  colorValue,
  alignFlex = 'column',
  name,
}: TRadioControlProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <S.WrapperGroup alignFlex={alignFlex}>
          {options?.map((item) => (
            <Radio
              key={item.title}
              title={item.title}
              description={item.description}
              select={value === item.value}
              colorValue={colorValue ?? item.colorValue}
              onPress={() => onChange(item.value)}
            />
          ))}
        </S.WrapperGroup>
      )}
    />
  );
};

export default RadioGroup;
