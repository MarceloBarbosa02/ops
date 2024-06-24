import React from 'react';

import { StackScreen, Switch, Typography } from '@/shared/components';

import { useNotification } from './use-notification';

import * as S from './home.notification.styles';

const NotificationGeneralScreen = () => {
  const {
    isActive,
    isLoadingScreen,
    isLoadingNotification,
    handleNavigation,
    handleSendNotification,
  } = useNotification();

  return (
    <StackScreen
      title="Notificações"
      handleNavigateLeft={handleNavigation}
      left>
      <S.Wrapper>
        <S.WrapperItem>
          <Typography title="Geral" weight="bold" />
          <Switch
            title=""
            defaultValue={isActive}
            isLoading={isLoadingNotification || isLoadingScreen}
            onPress={() => handleSendNotification(!isActive)}
          />
        </S.WrapperItem>
      </S.Wrapper>
    </StackScreen>
  );
};

export default NotificationGeneralScreen;
