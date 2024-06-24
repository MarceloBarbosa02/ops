import { Typography } from '../typography';
import { TButtonOptionProps } from './button.types';

import * as S from './button.styles';

const ButtonOption = ({
  title,
  startContent,
  endContent,
  ...rest
}: TButtonOptionProps) => {
  return (
    <S.WrapperOption {...rest} activeOpacity={0.7}>
      <S.WrapperOptionInfo>
        {startContent}
        <Typography title={title} weight="bold" />
      </S.WrapperOptionInfo>
      {endContent}
    </S.WrapperOption>
  );
};

export default ButtonOption;
