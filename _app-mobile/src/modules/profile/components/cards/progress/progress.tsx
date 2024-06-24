import { Badge, BarProgress, Typography } from '@/shared/components';
import * as S from './progress.styles';
import { ProgressCardProps } from './progress.types';

const ProgressCard = ({ progress = 0.5 }: ProgressCardProps) => {
  return (
    <S.WrapperProgress>
      <BarProgress sizeWidth={progress} />
      <S.WrapperInfo>
        <S.WrapperSteps>
          <Typography title={progress === 50 ? '1' : '0'} variant="subtitle" />
          <Typography title="/2" variant="subtitle" weight="bold" />
        </S.WrapperSteps>
        <S.WrapperDuration>
          <Typography title="Duração aproximada" variant="subtitle" />
          <Badge label="5 min" colorValue="secondary" size="sm" />
        </S.WrapperDuration>
      </S.WrapperInfo>
    </S.WrapperProgress>
  );
};

export default ProgressCard;
