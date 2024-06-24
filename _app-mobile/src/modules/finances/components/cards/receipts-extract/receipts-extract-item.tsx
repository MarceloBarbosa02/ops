import React, { ReactNode, useMemo } from 'react';
import * as Clipboard from 'expo-clipboard';
import { Dimensions } from 'react-native';

import { ArrowInIcon, ArrowOutIcon } from '@/shared/assets/components/finances';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { CopyIcon } from '@/shared/assets/components/sales';
import { Typography } from '@/shared/components';
import { format } from '@/shared/utils';

import { TItemLineProps } from './receipts-types';

import * as S from './receipts-extract.styles';

const { width } = Dimensions.get('window');

export const ItemLine = ({
  label,
  title,
  description,
  out = '',
  canceled = false,
  isCopy = false,
}: TItemLineProps) => {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(title as string);
    showToast({
      type: 'success',
      message: 'Código copiado com sucesso',
    });
  };

  const descriptionExtract = useMemo(() => {
    if (label === 'Descrição') {
      return (
        <S.WrapperDescription>
          <S.TitleLabel isCanceled={canceled}>
            {format.limitarTamanhoString(`${title}`, width - 50)}
          </S.TitleLabel>
          {description && (
            <S.TitleDescription isCanceled={canceled}>
              {format.limitarTamanhoString(`${description}`, width + 40)}
            </S.TitleDescription>
          )}
        </S.WrapperDescription>
      );
    }
    if (label === 'Categoria') {
      return title;
    }
    if (label.includes('Código')) {
      return (
        <S.WrapperDescription
          style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Typography
            title={`#${title}`}
            colorValue="neutral-black"
            size="small"
            weight="medium"
            lineThrough={canceled}
          />
          {isCopy && (
            <S.WrapperBtnCopy onPress={copyToClipboard}>
              <CopyIcon />
            </S.WrapperBtnCopy>
          )}
        </S.WrapperDescription>
      );
    }
    return (
      <Typography
        title={format.limitarTamanhoString(`${title}`, width)}
        colorValue="neutral-black"
        weight="medium"
        size="small"
        lineThrough={canceled}
      />
    );
  }, [label, title, description, canceled]);

  return (
    <S.WrapperItem>
      <Typography
        title={label}
        colorValue="neutral-regular"
        size="small"
        weight="bold"
      />
      <S.WrapperInfo>
        {out === 'IN' && <ArrowInIcon />}
        {out === 'OUT' && <ArrowOutIcon />}
        {descriptionExtract}
      </S.WrapperInfo>
    </S.WrapperItem>
  );
};
