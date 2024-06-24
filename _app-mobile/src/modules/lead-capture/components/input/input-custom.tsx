import { TextInputProps } from 'react-native';
import * as S from './input-custom.styles';

interface InputTextProps extends TextInputProps {}

export const InputCustom = ({ ...rest }: InputTextProps) => {
  return (
    <S.WrapperInput>
      <S.Input {...rest} />
    </S.WrapperInput>
  );
};
