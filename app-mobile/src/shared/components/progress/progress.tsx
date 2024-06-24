import { View } from 'react-native';
import { TProgressProps } from './progress.types';
import { colors } from '@/shared/theme';

const Progress = ({ progress = 1 }: TProgressProps) => {
  return (
    <View
      style={{
        width: '100%',
        height: 12,
        backgroundColor: colors.gray[300],
        padding: 2,
        borderRadius: 2,
      }}>
      {progress ? (
        <View
          style={{
            width: `${progress}%`,
            height: 8,
            backgroundColor: colors.blue[600],
            borderRadius: 2,
          }}
        />
      ) : null}
    </View>
  );
};

export default Progress;
