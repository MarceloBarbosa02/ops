import { ModalScreen, Typography } from '@/shared/components';
import * as S from './access-modal.styles';

const ViewAccessScreen = () => {
  return (
    <ModalScreen>
      <S.Wrapper>
        <Typography title="View" />
      </S.Wrapper>
    </ModalScreen>
  );
};

export default ViewAccessScreen;
