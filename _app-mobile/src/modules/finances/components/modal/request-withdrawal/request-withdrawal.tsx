import { ActionSheet, FooterCard, Typography } from '@/shared/components';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Modalize } from 'react-native-modalize';

import { format } from '@/shared/utils';
import { InfoIconCard } from '@/shared/assets/components/finances';

import { TConfirmWithdrawalProps } from './request-withdrawal.types';
import { useRequestWithdrawal } from './use-request-withdrawal';

import * as S from './request-withdrawal.styles';
import { Portal } from 'react-native-portalize';

const RequestWithdrawalModal = ({
  refActionSheet,
}: TConfirmWithdrawalProps) => {
  const theme = useTheme();
  const {
    payload,
    methods,
    isPendingWithdrawal,
    handleClose,
    handleRequestWithdrawal,
  } = useRequestWithdrawal({ refActionSheet });

  return (
    <Portal>
      <Modalize
        ref={refActionSheet}
        adjustToContentHeight
        modalStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: theme.gray[50],
        }}
        overlayStyle={{ overflow: 'hidden' }}
        onClosed={() => methods.setValue('value', '0')}>
        <S.Wrapper>
          <S.WrapperTitle>
            <S.WrapperHeaderIcon>
              <Typography title="Solicitar saque" weight="bold" />
              <S.WrapperBtnClose onPress={handleClose}>
                <AntDesign name="close" size={18} color={theme.gray[900]} />
              </S.WrapperBtnClose>
            </S.WrapperHeaderIcon>
            <Typography
              title="Para prosseguir, cheque as informações e confirme-as para realizar
              a solicitação"
              colorValue="neutral-regular"
              size="small"
            />
          </S.WrapperTitle>
          <S.WrapperModal>
            <S.WrapperItems>
              <S.Item>
                <Typography title="Status do produto" />
                <Typography
                  title={format.cpf(payload.document)}
                  weight="bold"
                />
              </S.Item>
              <S.Item>
                <Typography title="Valor a sacar" />
                <Typography
                  title={format.money(payload?.value)}
                  colorValue="success"
                />
              </S.Item>
              <S.Item>
                <Typography title="Taxa" />
                <Typography
                  title={`-${format.money(payload?.tax)}`}
                  colorValue="neutral-regular"
                />
              </S.Item>
              <S.Item not>
                <Typography title="Valor a receber" />
                <Typography
                  title={format.money(payload?.value - payload?.tax)}
                  weight="bold"
                />
              </S.Item>
            </S.WrapperItems>
            <S.WrapperCard>
              <InfoIconCard />
              <Typography
                title="A solicitação do saque passará por uma análise de segurança"
                size="small"
                style={{ width: '90%' }}
              />
            </S.WrapperCard>
          </S.WrapperModal>
          <S.WrapperCardFooter>
            <FooterCard
              titleLeft="Cancelar"
              titleRight="Solicitar saque"
              colorRight="success"
              startContent={
                <Octicons
                  name="check"
                  size={24}
                  color={theme.button.text.primary}
                />
              }
              isLoading={isPendingWithdrawal}
              handleOnPressLeft={handleClose}
              handleOnPressRight={handleRequestWithdrawal}
            />
          </S.WrapperCardFooter>
        </S.Wrapper>
      </Modalize>
    </Portal>
    // </ActionSheet>
  );
};

export default RequestWithdrawalModal;
