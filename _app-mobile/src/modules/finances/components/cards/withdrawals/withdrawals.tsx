import { Button, Input, Typography } from '@/shared/components';
import * as S from './withdrawals.styles';
import { VerifyIdentityCard } from '../verify-identity';
import { useWithdrawals } from './use-withdrawals';
import { FormProvider } from 'react-hook-form';
import DollarIcon from '@/shared/assets/components/generics/dolar';
import { RequestWithdrawalModal } from '../../modal/request-withdrawal';
import { TouchableOpacity, View } from 'react-native';

const WithdrawalsCards = () => {
  const {
    methods,
    balances,
    isBiometrics,
    refActionSheet,
    isValidIdentity,
    isValuesBalance,
    handleNavigation,
    handleShowModalConfirm,
  } = useWithdrawals();

  console.log(isBiometrics && isValuesBalance);

  return (
    <S.Wrapper>
      <FormProvider {...methods}>
        <Typography title="Solicitação de saque" weight="bold" />
        <S.WrapperCard>
          {isValidIdentity ? (
            <VerifyIdentityCard />
          ) : (
            <S.Content>
              {isBiometrics ? (
                <>
                  {isValuesBalance ? (
                    <Typography title="Insira o valor para receber via chave PIX do seu negócio" />
                  ) : (
                    <Typography title="O saldo disponível na conta é insuficiente para solicitar um saque. Valor mínimo de R$ 5,00." />
                  )}
                </>
              ) : isValuesBalance ? (
                <Typography title="A verificação de identidade é necessária para solicitar um saque." />
              ) : (
                <Typography title="Para solicitar um saque, é necessário o valor mínimo é de R$ 5,00 e verificar sua identidade." />
              )}
              <View>
                <Input
                  control={methods.control}
                  name="value"
                  label="Valor"
                  placeholder="R$"
                  maxLength={18}
                  keyboardType="numeric"
                  labelPlacement="inside"
                  mask
                  type="money"
                  options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: 'R$',
                    suffixUnit: '',
                  }}
                  errorMessage={methods.formState.errors.value?.message}
                  isDisabled={!isValuesBalance && !isBiometrics}
                />

                {isValuesBalance && !isBiometrics ? (
                  <Button
                    title="Verificar identidade"
                    onPress={handleNavigation}
                    textWeightButton="bold"
                    size="medium"
                  />
                ) : (
                  <Button
                    title="Solicitar saque"
                    size="medium"
                    textWeightButton="bold"
                    startContent={<DollarIcon isActive={isBiometrics} />}
                    onPress={handleShowModalConfirm}
                    disabled={!isBiometrics}
                  />
                )}
              </View>
            </S.Content>
          )}
        </S.WrapperCard>
        <RequestWithdrawalModal refActionSheet={refActionSheet} />
      </FormProvider>
    </S.Wrapper>
  );
};

export default WithdrawalsCards;
