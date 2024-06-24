import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useCallback, useRef, useState } from 'react';
import { View } from 'react-native';
import { Controller } from 'react-hook-form';
import { useTheme } from 'styled-components/native';

import { TSelectProps } from './select.types';
import { Typography } from '../typography';
import { ActionSheet } from '../action-sheet';

import * as S from './select.styles';
import { ScrollView } from 'moti';

const Select = ({
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
}: TSelectProps) => {
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
            <Typography title={label} variant="subtitle" size="large" />
            {isRequired && <Typography title="*" colorValue="danger" />}
          </S.LabelContainer>
          <S.Wrapper
            onPress={handleIsOpen}
            isErrored={!!errorMessage}
            isSelected={selected}
            isDisabled={!!rest.disabled}
            {...rest}>
            <Typography
              title={`${valueDefault(value) ?? ''}`}
              style={{ flexWrap: 'wrap', width: '70%' }}
            />
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={theme.gray[600]}
            />
          </S.Wrapper>
          {errorMessage && (
            <S.ErrorContainer>
              <Typography
                title={errorMessage}
                variant="subtitle"
                size="small"
                colorValue="danger"
              />
            </S.ErrorContainer>
          )}
          <ActionSheet
            bottomSheetRef={refActionSheet}
            title={`Selecione ${label}`}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                paddingVertical: 8,
                paddingBottom: 386,
              }}>
              <View style={{ flex: 1 }}>
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
                    {item.value === value && (
                      <AntDesign
                        name="check"
                        size={16}
                        color={theme.green[500]}
                      />
                    )}
                  </S.SelectOptions>
                ))}
              </View>
            </ScrollView>
          </ActionSheet>
        </S.Container>
      )}
    />
  );
};

export default Select;
