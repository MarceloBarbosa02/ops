import { IdentifyConfig } from '@/shared/components/headers';
import { Text, View } from 'react-native';

import {
  ButtonMethods,
  EmptyCards,
  LayoutStackScreen,
  Typography,
} from '@/shared/components';
import LegalPerson from '@/shared/assets/images/svg/legal-person.svg';
import User from '@/shared/assets/images/svg/user.svg';
import { WarningIcon } from '@/shared/assets';

import { useConfigureBusiness } from './use-business';

function SelectPerson() {
  const { handleSelectOptionPerson } = useConfigureBusiness();

  return (
    <LayoutStackScreen title="Configure seu negócio" isShowFooterBottom={false}>
      <View className="flex-1 gap-4 p-4">
        <IdentifyConfig step="step1" />
        <EmptyCards title="Adicionar negócio ">
          <Typography
            title="Qual atividade que melhor se alinha com seu negócio?"
            variant="caption"
          />
          <ButtonMethods
            title="Pessoa jurídica"
            icon={<LegalPerson />}
            onSelectMethods={() => handleSelectOptionPerson('LEGAL_PERSON')}
          />
          <ButtonMethods
            title="Pessoa física"
            icon={<User />}
            onSelectMethods={() => handleSelectOptionPerson('PHYSICAL_PERSON')}
          />
        </EmptyCards>
        <View className="items-center bg-gray-50 p-4 rounded-lg">
          <View className="flex-row items-center gap-3 bg-yellow-100 p-2 rounded">
            <WarningIcon />
            <Typography variant="caption" className="w-5/6">
              Ao se cadastrar como{' '}
              <Typography
                title="pessoa física"
                variant="caption"
                weight="bold"
              />
              , há um limite de{' '}
              <Typography
                title="R$XXX.XXX,00"
                variant="caption"
                weight="bold"
              />{' '}
              no faturamento.
            </Typography>
          </View>
        </View>
      </View>
    </LayoutStackScreen>
  );
}

export default SelectPerson;
