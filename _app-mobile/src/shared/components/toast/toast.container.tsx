import Toast from './toast';
import { TToasContainerProps } from './toast.types';

import * as S from './toast.styles';

const ToastContainer = ({ messages }: TToasContainerProps) => {
  return (
    <S.Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </S.Container>
  );
};

export default ToastContainer;
