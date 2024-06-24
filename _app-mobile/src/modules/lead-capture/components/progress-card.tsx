import { Badge, BarProgress, Typography } from '@/shared/components';

import { TProgressBar } from './components.types';

import * as S from './lead.components.styles';

export const ProgressLeadCard = ({
  progress = 0.1,
  step = '0',
  stepMax = '6',
}: TProgressBar) => {
  return (
    <S.WrapperProgress>
      <BarProgress sizeWidth={progress} />
      <S.WrapperProgressInfo>
        <S.WrapperProgressSteps>
          <Typography title={step} />
          <Typography title={`/${stepMax}`} weight="bold" />
        </S.WrapperProgressSteps>
        <S.WrapperProgressDuration>
          <Typography
            title="Duração aproximada"
            colorValue="neutral-regular"
            size="small"
          />
          <Badge label="3 min" colorValue="secondary" size="sm" />
        </S.WrapperProgressDuration>
      </S.WrapperProgressInfo>
    </S.WrapperProgress>
  );
};
