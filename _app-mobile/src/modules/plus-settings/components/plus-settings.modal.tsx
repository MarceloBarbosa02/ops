import { Dimensions } from 'react-native';
import { router } from 'expo-router';

import { ActionSheet, Badge, Typography } from '@/shared/components';
import {
  EnumCAcronym,
  format,
  queryClient,
  useFetchCompanies,
  useUpdateCompanies,
} from '@/shared';
import { showToast } from '@/shared/components/toast/use-toast-store';

import { TPlusSettingsModal } from './components.types';
import * as S from './plus-settings.styles';

const { width } = Dimensions.get('window');

export const PlusSettingsModal = ({ refActionSheet }: TPlusSettingsModal) => {
  const { data: dataCompanies } = useFetchCompanies();
  const { mutate: updateCompany } = useUpdateCompanies();

  const updateCompanyDefault = async (companyUuid: string, active: boolean) => {
    if (!active) {
      updateCompany(companyUuid, {
        onSuccess: () => {
          queryClient.resetQueries();

          refActionSheet.current?.dismiss();
          showToast({
            type: 'success',
            message: 'Negócio alterado com sucesso',
          });
          router.navigate('/(private)/(tabs)/');
        },
        onError(error: any) {
          refActionSheet.current?.dismiss();
          showToast({
            type: 'error',
            message: error?.response?.data?.message ?? 'Ops! Algo deu errado.',
          });
        },
      });
    }
  };

  return (
    <ActionSheet
      bottomSheetRef={refActionSheet}
      indexOpen={Number(dataCompanies?.data.length) - 1}
      title="Alterar conta">
      <S.WrapperModal>
        {dataCompanies?.data.map((item) => (
          <S.WrapperCard
            key={item.uuid}
            onPress={() => updateCompanyDefault(item.uuid, item.isDefault)}>
            <S.WrapperCardInfo>
              <S.WrapperCardInfoFlag>
                <Badge
                  label={EnumCAcronym[item.type]}
                  variant="solid"
                  typeBorder="solid"
                  colorValue="secondary"
                />
              </S.WrapperCardInfoFlag>
              <Typography
                title={format.limitarTamanhoString(
                  format.initialsName(`${item?.nickname ?? item.fantasyName}`),
                  width
                )}
              />
            </S.WrapperCardInfo>
            <S.WrapperDot>{item.isDefault && <S.Dot />}</S.WrapperDot>
          </S.WrapperCard>
        ))}
      </S.WrapperModal>
    </ActionSheet>
  );
};
