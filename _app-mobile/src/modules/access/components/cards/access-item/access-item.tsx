import { Badge, Button, Switch, Typography } from '@/shared/components';
import * as S from './access-item.styles';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { RemoveIcon } from '@/shared/assets/components/generics';

const AccessItemCard = () => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <Typography title="ItemCard" />
        <Badge label="Adm" colorValue="primary" typeBorder="solid" />
      </S.WrapperHeader>

      <S.WrapperItems>
        <Typography title="Último acesso" />
        <Typography
          title="há 5 dias"
          underline
          colorValue="primary"
          size="small"
        />
      </S.WrapperItems>

      <S.WrapperItems>
        <Typography title="Status" />
        <Switch title="Ativo" />
      </S.WrapperItems>

      <S.WrapperButtons>
        <Button
          colorValue="secondary"
          title="Editar"
          size="medium"
          textWeightButton="bold"
          endContent={
            <Entypo
              name="chevron-small-right"
              size={24}
              color={theme.button.text.primary}
            />
          }
        />
        <Button
          colorValue="tertiary"
          title="Excluir"
          size="medium"
          textWeightButton="bold"
          startContent={<RemoveIcon />}
        />
      </S.WrapperButtons>
    </S.Wrapper>
  );
};

export default AccessItemCard;
