import { View } from 'react-native';

import { ToasContainerProps } from './toast.types';
import Toast from './toast';

const ToastContainer = ({ messages }: ToasContainerProps) => {
  return (
    <View className="z-[99999] absolute bottom-5 right-0 left-0 rounded mx-4 p-2">
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </View>
  );
};

export default ToastContainer;
