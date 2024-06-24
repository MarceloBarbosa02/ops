import { forwardRef, memo, useMemo } from 'react';
import Tooltip from 'rn-tooltip';
import { useTheme } from 'styled-components/native';

import { Typography } from '../typography';

import { InfoTooltipIcon } from '@/shared/assets/components';
import { TTooltipProps } from './tooltip.types';
import { useTooltip } from './use-tooltip';

import * as S from './tooltip.styles';

const TooltipCustom = (
  {
    description,
    endContent = false,
    startContent = false,
    title,
    color,
    typeWeight = 'bold',
  }: TTooltipProps,
  ref: any
) => {
  const colors = useTheme();
  const { isOpen, onClose, onOpen } = useTooltip();

  const iconTooltip = useMemo(() => {
    return (
      <Tooltip
        actionType="press"
        backgroundColor={colors.gray[100]}
        popover={
          <Typography
            title={description}
            colorValue="neutral-medium"
            size="small"
          />
        }
        height="auto"
        width="50%"
        containerStyle={{ borderWidth: 1, borderColor: colors.gray[300] }}
        onOpen={onOpen}
        onClose={onClose}>
        <InfoTooltipIcon />
      </Tooltip>
    );
  }, [description, isOpen]);

  return (
    <S.Wrapper>
      {startContent && iconTooltip}
      <Typography
        title={title}
        colorValue={color}
        weight={typeWeight}
        size="small"
      />
      {endContent && iconTooltip}
    </S.Wrapper>
  );
};

export default memo(forwardRef(TooltipCustom));
