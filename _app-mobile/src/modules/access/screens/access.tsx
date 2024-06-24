import { Button, StackScreen, Typography } from '@/shared/components';

import * as S from './access.styles';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { router } from 'expo-router';
import { AccessItemCard } from '../components';
import { ScrollView } from 'react-native';
import { useAccess } from './use-access';

const AccessScreen = () => {
  const theme = useTheme();
  const { handleNavigation, handleNavigationBack } = useAccess();

  return (
    <StackScreen
      title="Acessos"
      isScroll={false}
      handleNavigateLeft={handleNavigationBack}>
      <S.Wrapper>
        <Button
          title="Adicionar acesso"
          textWeightButton="bold"
          size="medium"
          onPress={handleNavigation}
          endContent={
            <Entypo
              name="chevron-small-right"
              size={24}
              color={theme.button.text.primary}
            />
          }
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="none"
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <S.WrapperCards>
            <AccessItemCard />
            <AccessItemCard />
          </S.WrapperCards>
        </ScrollView>
      </S.Wrapper>
    </StackScreen>
  );
};

export default AccessScreen;
