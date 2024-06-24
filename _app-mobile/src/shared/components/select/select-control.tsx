import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { MaterialIcons } from '@expo/vector-icons';
import { useCallback, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { TSelectControlProps } from './select.types';
import { Typography } from '../typography';
import { ActionSheet } from '../action-sheet';

import * as S from './select.styles';

const SelectControl = ({
  title = '',
  options,
  errorMessage,
  defaultValue,
  control,
  name,
  label = '',
  isRequired = false,
  sizeWidth = 100,
  ...rest
}: TSelectControlProps) => {
  const theme = useTheme();
  const refActionSheet = useRef<BottomSheetModal>(null);
  const [selected, setSelected] = useState<boolean>(false);

  const handleIsOpen = () => {
    setSelected(true);
    refActionSheet.current?.present();
  };

  const handleIsClose = () => {
    setSelected(false);
    refActionSheet.current?.dismiss();
  };

  const valueDefault = useCallback(
    (value: string) => {
      if (options) {
        return options.filter((item) => item.value === value)[0]?.label;
      }
    },
    [options]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <S.Container isDisabled={!!rest.disabled} sizeWidth={sizeWidth}>
          <S.LabelContainer>
            <Typography title={label} variant="subtitle" />
            {isRequired && <Typography title="*" colorValue="danger" />}
          </S.LabelContainer>
          <S.Wrapper
            onPress={handleIsOpen}
            isErrored={!!errorMessage}
            isSelected={selected}
            isDisabled={!!rest.disabled}
            {...rest}>
            <Typography title={valueDefault(value) ?? ''} />
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={theme.gray[600]}
            />
          </S.Wrapper>
          {errorMessage && (
            <Typography
              title={errorMessage}
              variant="subtitle"
              size="small"
              colorValue="danger"
            />
          )}
          <ActionSheet
            bottomSheetRef={refActionSheet}
            onSelected={handleIsClose}
            title={`Selecione ${label}`}>
            <View style={{ width: '100%' }}>
              {options.map((item) => (
                <S.SelectOptions
                  key={item.value}
                  onPress={() => {
                    handleIsClose();
                    onChange(item.value);
                  }}>
                  <Typography
                    title={item.label}
                    weight={item.value === value ? 'bold' : 'regular'}
                  />
                </S.SelectOptions>
              ))}
            </View>
          </ActionSheet>
        </S.Container>
      )}
    />
  );
};

export default SelectControl;
