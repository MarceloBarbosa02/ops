import { Button } from '../button';
import { TFooterProps } from './footer.types';

import * as S from './footer.styles';

const FooterCard = ({
  titleLeft,
  titleRight,
  colorLeft = 'secondary',
  colorRight = 'primary',
  startContent,
  endContent,
  isLoading = false,
  handleOnPressLeft,
  handleOnPressRight,
}: TFooterProps) => {
  return (
    <S.Wrapper>
      <Button
        variant="link"
        title={titleLeft}
        onPress={handleOnPressLeft}
        size="medium"
        colorValue={colorLeft}
        textWeightButton="bold"
        style={{ width: '48%' }}
      />
      <Button
        title={titleRight}
        onPress={handleOnPressRight}
        size="medium"
        textWeightButton="bold"
        style={{ width: '50%' }}
        colorValue={colorRight}
        startContent={startContent}
        endContent={endContent}
        isLoading={isLoading}
      />
    </S.Wrapper>
  );
};

export default FooterCard;
