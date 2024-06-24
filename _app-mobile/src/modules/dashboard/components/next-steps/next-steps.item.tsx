import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Button, Typography } from '@/shared/components';

import { TNextStepsCardsProps } from './next-steps.types';
import * as S from './next-steps.styles';

const NextStepsItem = ({ item }: TNextStepsCardsProps) => {
  const theme = useTheme();

  const complete = !item.active && item.complete;
  const active = item.active && !item.complete;

  return (
    <S.WrapperItem isActive={active} isComplete={complete}>
      <S.WrapperItemSteps
        color={
          complete ? theme.blue[50] : active ? theme.blue[600] : theme.gray[200]
        }
      >
        <Typography
          title={item.step.toString()}
          size="medium"
          weight="bold"
          align="center"
          style={{
            color: complete
              ? theme.blue[200]
              : active
              ? theme.button.text.primary
              : theme.gray[400],
          }}
        />
      </S.WrapperItemSteps>
      <S.WrapperItemIcon>
        <S.WrapperItemImg
          color={
            complete
              ? theme.blue[50]
              : active
              ? theme.gray[100]
              : theme.gray[200]
          }
        >
          {item.icon}
        </S.WrapperItemImg>
      </S.WrapperItemIcon>
      <S.WrapperInfoItem>
        <Typography
          title={item.title}
          size="medium"
          weight="black"
          align="center"
          style={{
            color: complete
              ? theme.blue[200]
              : active
              ? theme.gray[900]
              : theme.gray[400],
          }}
        />
        <Typography
          title={item.description}
          variant="subtitle"
          size="large"
          weight="regular"
          align="center"
          style={{
            color: complete
              ? theme.blue[200]
              : active
              ? theme.gray[500]
              : theme.gray[400],
          }}
        />
      </S.WrapperInfoItem>
      <S.WrapperInfoItem>
        {item.step !== 3 && item.active && (
          <Button
            title="Começar"
            textWeightButton="bold"
            radius="full"
            size="large"
            sizeWidth="auto"
            onPress={item.onNavigation}
            endContent={
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="white"
              />
            }
          />
        )}
        {complete && (
          <S.ButtonCompleted>
            <S.ButtonCompletedText>Concluído</S.ButtonCompletedText>
          </S.ButtonCompleted>
        )}
      </S.WrapperInfoItem>
    </S.WrapperItem>
  );
};

export default NextStepsItem;
