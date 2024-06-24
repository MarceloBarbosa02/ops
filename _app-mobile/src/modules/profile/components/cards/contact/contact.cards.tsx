import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { router } from 'expo-router';

import { useFetchMe } from '@/shared/queries';
import { format, formatPhoneDDI } from '@/shared/utils';
import { useContact } from '@/modules/profile/screens/contact/use-contact';
import { Button, Typography } from '@/shared/components';

import { TContactPros } from './contact.types';

import * as S from './contact.cards.styles';
import { useMemo } from 'react';

const ContactCards = ({ type }: TContactPros) => {
  const theme = useTheme();
  const { handleSelectTypeContact, setToggleType } = useContact();
  const { data: userData } = useFetchMe();

  const handleNavigation = () => {
    if (updateStatus?.type) {
      setToggleType(type);
      router.push('/(private)/(modais)/contact-finished');
    } else {
      handleSelectTypeContact(type);
    }
  };

  const updateStatus = useMemo(() => {
    return userData?.requestUpdateContact?.find(
      (obj: any) => obj.type === type
    );
  }, [userData?.requestUpdateContact]);

  return (
    <S.Wrapper>
      <View style={{ gap: 8 }}>
        <S.WrapperHeader>
          <Typography
            title={type === 'PHONE' ? 'Telefone' : 'E-mail'}
            weight="bold"
            size="medium"
          />
          {updateStatus?.type && (
            <S.ButtonPendent onPress={handleNavigation} activeOpacity={0.8}>
              <Typography
                title="Pendente"
                weight="bold"
                size="small"
                style={{ color: theme.button.orange[400] }}
              />
            </S.ButtonPendent>
          )}
        </S.WrapperHeader>
        <Typography
          title={
            type === 'PHONE'
              ? formatPhoneDDI(String(userData?.phoneNumber))
              : format.obscureEmail3Caracteres(`${userData?.email}`)
          }
          weight="medium"
          size="large"
          variant="subtitle"
          colorValue="neutral-regular"
        />
      </View>
      {!updateStatus?.type && (
        <Button
          title="Atualizar"
          size="medium"
          textWeightButton="bold"
          endContent={
            <Entypo
              name="chevron-small-right"
              size={24}
              color={theme.button.text.primary}
            />
          }
          onPress={handleNavigation}
        />
      )}
    </S.Wrapper>
  );
};

export default ContactCards;
