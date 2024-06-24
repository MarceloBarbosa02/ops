import { colors } from '@/shared/theme';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.gray[50],
    paddingHorizontal: 16,
    paddingTop: 16,
    shadowColor: 'rgba(23, 23, 23, 0.25)',
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.25,
    elevation: 10,
  },
});
