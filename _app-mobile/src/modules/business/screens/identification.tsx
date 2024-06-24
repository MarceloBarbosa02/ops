import { useTheme } from 'styled-components/native';
import { useBusiness } from './use-business';
import { Entypo } from '@expo/vector-icons';
import { Button, StackScreen, Typography } from '@/shared/components';

import * as S from './business.styles';
import { View } from 'react-native';
import { BusinessIcon, UserIcon } from '@/shared/assets/components/generics';
import { WarningIcon } from '@/shared/assets/components/toast';

const IdentificationScreen = () => {
  const theme = useTheme();
  const { handleSelectOptionPerson, handleNavigationBack } = useBusiness();

  return (
    <StackScreen
      title="Adicionar negócio"
      handleNavigateLeft={handleNavigationBack}>
      <S.Wrapper>
        <S.WrapperCard>
          <View>
            <Typography title="Identificação" weight="bold" />
            <Typography
              title="Selecione o tipo de atividade que se adequa ao negócio."
              colorValue="neutral-medium"
            />
          </View>
          <Button
            title="Pessoa jurídica"
            onPress={() => handleSelectOptionPerson('LEGAL_PERSON')}
            size="medium"
            textWeightButton="bold"
            endContent={<BusinessIcon />}
          />
          <Button
            title="Pessoa física"
            onPress={() => handleSelectOptionPerson('PHYSICAL_PERSON')}
            size="medium"
            textWeightButton="bold"
            endContent={<UserIcon />}
          />
        </S.WrapperCard>
        <S.WrapperCardInfo>
          <WarningIcon />
          <S.WrapperTextGenerics>
            Ao optar pelo cadastro da empresa como{' '}
            <Typography
              title="Pessoa Física"
              weight="bold"
              size="small"
              style={{ color: theme.button.text.secondary }}
            />
            , há um limite de{' '}
            <Typography
              title="R$ XX,00"
              weight="bold"
              size="small"
              style={{ color: theme.button.text.secondary }}
            />{' '}
            no faturamento.
          </S.WrapperTextGenerics>
        </S.WrapperCardInfo>
      </S.Wrapper>
    </StackScreen>
  );
};

export default IdentificationScreen;
