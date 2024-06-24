import { TextInput, View } from 'react-native';
import { Button } from '../button';
import { THeaderSearchProps } from './cards.types';
import { Typography } from '../typography';
import { FilterIcon, SearchIcon } from '@/shared/assets';
import { InputControl } from '../input';
import { Controller } from 'react-hook-form';

const HeaderSearch = ({
  quantity,
  variant = 'primary',
}: THeaderSearchProps) => {
  return (
    <View className="w-full flex-row items-center justify-between bg-gray-50 p-4">
      <View className="flex-row items-center gap-4 bg-gray-200 w-[70%] py-3 px-2 rounded-full">
        <SearchIcon variant={variant} />
        <TextInput placeholder="Buscar" className="w-auto" />
      </View>
      <Button
        title="Filtrar"
        variant={'link'}
        startContent={<FilterIcon variant={variant} />}
        endContent={
          <Typography title={`(${quantity})`} color={variant} weight="bold" />
        }
      />
    </View>
  );
};

export default HeaderSearch;
