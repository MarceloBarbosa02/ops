import { getVersion } from 'react-native-device-info';

import { TabsScreen, Typography } from '@/shared/components';

import { PlusSettingsCard, PlusSettingsMenu } from '../components';

import * as S from './plus-settings.styles';

const PlusSettingsScreen = () => {
  const version = getVersion();
  return (
    <TabsScreen title="Mais">
      <S.Wrapper>
        <PlusSettingsCard />
        <PlusSettingsMenu />
        <Typography
          title={`Versão do app: ${version}`}
          colorValue="neutral-regular"
        />
      </S.Wrapper>
    </TabsScreen>
  );
};

export default PlusSettingsScreen;
