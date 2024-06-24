import React from 'react';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import emptyDark from '@/shared/assets/images/png/no-documents-dark.png';
import emptyLight from '@/shared/assets/images/png/no-documents-light.png';
import { Button, Typography } from '@/shared/components';

import * as S from './empty.styles';
import { Image } from 'react-native';
import { TEmptyProps } from './empty.types';
import { router } from 'expo-router';

export const EmptyCard = ({ isEmptyRegister = false }: TEmptyProps) => {
  const theme = useTheme();

  if (isEmptyRegister) {
    return (
      <S.Wrapper>
        {theme.theme === 'dark' ? (
          <Image
            source={emptyDark}
            resizeMode="cover"
            style={{ height: 120 }}
          />
        ) : (
          <Image
            source={emptyLight}
            resizeMode="cover"
            style={{ height: 120 }}
          />
        )}
        <Typography
          title="Você ainda não finalizou seu cadastro"
          align="center"
          weight="bold"
        />
        <Typography
          title="É preciso finalizar seu cadastro para ver suas finanças."
          align="center"
          style={{ width: '70%' }}
        />
        <Button
          title="Finalizar Cadastro"
          size="medium"
          startContent={<Feather name="plus-circle" size={16} color="white" />}
          onPress={() => router.push('/(private)/(stack)/profile')}
        />
      </S.Wrapper>
    );
  }

  return (
    <S.WrapperInfo>
      {theme.theme === 'dark' ? (
        <Image source={emptyDark} resizeMode="cover" style={{ height: 120 }} />
      ) : (
        <Image source={emptyLight} resizeMode="cover" style={{ height: 120 }} />
      )}
      <Typography title="Não há registros..." align="center" weight="bold" />
      <Typography
        title="Quando surgirem, você poderá gerenciá-los por aqui"
        align="center"
        style={{ width: '70%' }}
      />
    </S.WrapperInfo>
  );
};
