import { Button, StackScreen, Typography } from '@/shared/components';

import * as S from './business.styles';
import { useBusiness } from './use-business';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { BusinessListCard } from '../components';
import { ScrollView, TouchableOpacity } from 'react-native';
import { EmptyBusinessCards } from '../components/cards/empty';

const BusinessScreen = () => {
  const theme = useTheme();
  const {
    businessList,
    userData,
    isPermittedCompany,
    handleNavigationBack,
    handleNavigationNew,
  } = useBusiness();

  return (
    <StackScreen
      title="Negócios"
      isScroll={false}
      handleNavigateLeft={handleNavigationBack}>
      <S.Wrapper>
        <Button
          title="Adicionar negócio"
          onPress={handleNavigationNew}
          size="medium"
          textWeightButton="bold"
          endContent={
            <Entypo
              name="chevron-small-right"
              size={24}
              color={
                isPermittedCompany
                  ? theme.button.disabled.text
                  : theme.button.text.primary
              }
            />
          }
          disabled={isPermittedCompany}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="none"
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <S.WrapperList>
            {businessList?.length === 0 ? (
              <EmptyBusinessCards />
            ) : (
              <>
                {businessList?.map((item) => (
                  <BusinessListCard key={item.uuid} data={item} />
                ))}
              </>
            )}
          </S.WrapperList>
        </ScrollView>
      </S.Wrapper>
    </StackScreen>
  );
};

export default BusinessScreen;
