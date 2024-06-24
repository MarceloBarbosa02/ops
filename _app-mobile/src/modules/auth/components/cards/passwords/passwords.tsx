import { TextInput, View } from 'react-native';
import { TPasswordsProps } from './passwords.types';
import { PasswordsBar } from './passwords.bar';
import { useFormContext, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import { Input, Typography } from '@/shared/components';

import * as S from './passwords.styles';

const PasswordsCards = ({ control, errors }: TPasswordsProps) => {
  const user = useFormContext();
  const password = user.watch('new_password');
  const password_confirm = user.watch('password_confirm');

  // useEffect(() => {
  //   if (!password) {
  //     user.clearErrors();
  //   }

  //   if (password?.length > 0 && password_confirm) {
  //     if (password !== password_confirm) {
  //       user.setError('password_confirm', {
  //         type: 'validate',
  //         message: 'As senhas digitadas não coincidem.',
  //       });
  //     }
  //   }
  // }, [password, password_confirm]);

  return (
    <S.Wrapper>
      <View>
        <View style={{ marginBottom: password?.length === 0 ? 16 : 0 }}>
          {/* <TextInput placeholder="Senha" secureTextEntry /> */}
          <Input
            control={user.control}
            name="new_password"
            label="Senha"
            labelPlacement="filled"
            secureTextEntry
            errorMessage={user.formState.errors.root?.message}
            isErrorMessage
            isRemoveSpecialCharacters={false}
          />
        </View>
        {password && <PasswordsBar password={password} />}
        {user.formState.errors.new_password?.message && (
          <Typography
            title={`${errors.new_password?.message}`}
            variant="subtitle"
            size="small"
            colorValue="danger"
            style={{ marginLeft: 16 }}
          />
        )}
      </View>
      <Input
        control={user.control}
        name="password_confirm"
        label="Confirmar senha"
        labelPlacement="filled"
        secureTextEntry
        errorMessage={user.formState.errors.password_confirm?.message}
        isRemoveSpecialCharacters={false}
      />
    </S.Wrapper>
  );
};

export default PasswordsCards;
