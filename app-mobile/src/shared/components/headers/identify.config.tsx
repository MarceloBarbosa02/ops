import { View } from 'moti';
import { Typography } from '../typography';
import { THeaderIdentifyProps } from './headers.type';

const IdentifyConfig = ({ step }: THeaderIdentifyProps) => {
  return (
    <View className="w-full bg-gray-50 p-4 rounded-lg flex-row items-center justify-between">
      <View className="flex-row items-center gap-2">
        <View
          className={`w-12 h-2 bg-base-blue-default rounded-full ${step !== 'step1' && 'opacity-30'}`}
        />
        <View
          className={`w-12 h-2 bg-base-blue-default rounded-full ${step !== 'step2' && 'opacity-30'}`}
        />
      </View>
      <Typography title="Preencha os dados de identificação" size="small" />
    </View>
  );
};

export default IdentifyConfig;
