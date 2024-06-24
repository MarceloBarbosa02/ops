import * as S from "../components/Items/ItensReceipts/styles";

export const items_cards = {
  id: (
    <S.WrapperItem>
      <S.TitleFirst>ID</S.TitleFirst>
    </S.WrapperItem>
  ),
  cod: (
    <S.WrapperItem>
      <S.TitleFirst>Código</S.TitleFirst>
    </S.WrapperItem>
  ),
  product: (
    <S.WrapperItem>
      <S.TitleFirst>Produto</S.TitleFirst>
    </S.WrapperItem>
  ),
  client: (
    <S.WrapperItem>
      <S.TitleFirst>Cliente</S.TitleFirst>
    </S.WrapperItem>
  ),
  status: (
    <S.WrapperItem>
      <S.TitleFirst>Status</S.TitleFirst>
    </S.WrapperItem>
  ),
  period: (
    <S.WrapperItem>
      <S.TitleFirst>Período</S.TitleFirst>
    </S.WrapperItem>
  ),
  payment: (
    <S.WrapperItem>
      <S.TitleFirst>Pagamento</S.TitleFirst>
    </S.WrapperItem>
  ),
  value: (
    <S.WrapperItem>
      <S.TitleFirst>Valor</S.TitleFirst>
    </S.WrapperItem>
  ),
  createdAt: (
    <S.WrapperItem>
      <S.TitleFirst>Solicitado</S.TitleFirst>
    </S.WrapperItem>
  ),
  releasedAt: (
    <S.WrapperItem>
      <S.TitleFirst>Liberado</S.TitleFirst>
    </S.WrapperItem>
  ),
  contact: (
    <S.WrapperItem>
      <S.TitleFirst>Contato</S.TitleFirst>
    </S.WrapperItem>
  ),
  frequency: (
    <S.WrapperItem>
      <S.TitleFirst>Frequência</S.TitleFirst>
    </S.WrapperItem>
  ),
};

export const status_title = {
  TRANSFERRED: "Aprovado",
  LIQUIDATING: "Liquidando",
  PENDING: "Pendente",
  REFUSED: "Recusado",
  RETURNED: "Devolvido",
  IN_REVIEW: "Revisão",
};
