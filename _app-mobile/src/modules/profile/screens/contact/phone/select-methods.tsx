import { ModalScreen } from '@/shared/components';

import { PhoneCard } from '@/modules/profile/components';

import * as S from './phone.styles';
import { usePhone } from './use-phone';

const ContactSelectMethodsModalScreen = () => {
  const { handleNavigationBack } = usePhone();

  return (
    <ModalScreen
      title="Atualizar telefone"
      handleNavigateRight={handleNavigationBack}>
      <S.Wrapper>
        <PhoneCard />
      </S.Wrapper>
    </ModalScreen>
  );
};

export default ContactSelectMethodsModalScreen;
