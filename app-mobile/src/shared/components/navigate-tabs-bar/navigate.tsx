import {
  DashIcon,
  MarketplaceIcon,
  PlusIcon,
  SalesIcon,
} from '@/shared/assets/components/tabs';
import { colors } from '@/shared/theme';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

export const NavigateTabBar = ({ navigation, descriptors, state }: any) => {
  return (
    <View className="items-center justify-center">
      <View style={styles.content}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              className="items-center justify-center">
              <View style={{ alignItems: 'center', padding: 4 }}>
                <View
                  style={{
                    padding: 16,
                    borderRadius: 99,
                    backgroundColor: isFocused
                      ? colors.gray[900]
                      : 'transparent',
                  }}>
                  {label === 'dash' && <DashIcon focused={isFocused} />}
                  {label === 'sales' && <SalesIcon focused={isFocused} />}
                  {label === 'marketplace' && (
                    <MarketplaceIcon focused={isFocused} />
                  )}
                  {label === 'plus' && <PlusIcon focused={isFocused} />}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginBottom: Platform.OS === 'ios' ? 38 : 24,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    flexDirection: 'row',
    borderRadius: 99,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.8,
  },
});
