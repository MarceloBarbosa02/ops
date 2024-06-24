import * as S from './billing-graphs.styles';

export const BillingGraphsEmpty = () => {
  return (
    <S.WrapperEmpty>
      <S.Description>
        Comece a lucrar e <S.DescriptionBold>visualize </S.DescriptionBold>
        dados referentes ao seu histórico de
        <S.DescriptionBold> vendas</S.DescriptionBold>
      </S.Description>
    </S.WrapperEmpty>
  );
};
