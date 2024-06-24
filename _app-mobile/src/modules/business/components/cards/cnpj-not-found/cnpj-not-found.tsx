import { Typography } from '@/shared/components';
import * as S from './cnpj-not-found.styles';
import { InfoIcon } from '@/shared';

const CNPJNotFoundCard = () => {
  return (
    <S.Wrapper>
      <InfoIcon />
      <S.WrapperInfo>
        <Typography
          title="Porque não consigo localizar a minha empresa?"
          weight="bold"
        />
        <S.WrapperInfoDot>
          <S.Dot />
          <Typography
            title="Empresa criada recentemente;"
            size="small"
            colorValue="neutral-medium"
          />
        </S.WrapperInfoDot>
        <S.WrapperInfoDot>
          <S.Dot />
          <Typography
            title="Empresa encerrada;"
            size="small"
            colorValue="neutral-medium"
          />
        </S.WrapperInfoDot>
        <S.WrapperInfoDot>
          <S.Dot />
          <Typography
            title="Situação cadastral inativa;"
            size="small"
            colorValue="neutral-medium"
          />
        </S.WrapperInfoDot>
        <S.WrapperInfoDot>
          <S.Dot />
          <Typography
            title="O CNPJ foi digitado incorretamente."
            size="small"
            colorValue="neutral-medium"
          />
        </S.WrapperInfoDot>
        <S.TextSuporte>
          Caso não seja nenhuma destas alternativas acima, entre em contato com
          o nosso{' '}
          <Typography title="suporte" weight="bold" colorValue="primary" /> para
          receber ajuda.
        </S.TextSuporte>
      </S.WrapperInfo>
    </S.Wrapper>
  );
};

export default CNPJNotFoundCard;
