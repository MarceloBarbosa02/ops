import { View } from 'react-native';

import { LayoutTabsScreen } from '@/shared/components';

import { JourneyCards } from '../components/journey';
import { BalancesCard } from '../components/balances';
import { TutorialCard } from '../components';

const DashboardScreen = () => {
  return (
    <LayoutTabsScreen>
      <View className="mt-3 gap-4">
        <TutorialCard />
        <BalancesCard />
        <JourneyCards />
      </View>
    </LayoutTabsScreen>
  );
};

export default DashboardScreen;
