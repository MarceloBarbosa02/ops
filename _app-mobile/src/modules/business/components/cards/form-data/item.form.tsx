import { Typography } from '@/shared/components';
import * as S from './formData.styles';
import { TFormDataItemProps } from './formData.types';

export const FormItemList = ({ description, title }: TFormDataItemProps) => {
  return (
    <S.WrapperItem>
      <Typography
        title={title}
        weight="bold"
        colorValue="neutral-regular"
        style={{ width: '40%' }}
      />
      <Typography title={description} style={{ width: '55%' }} />
    </S.WrapperItem>
  );
};
