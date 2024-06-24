import { useFetchMe } from '@/shared/queries';
import { calculateYearDate, getAddressByZipCode } from '@/shared/utils';
import { cleanMask } from 'masks-br';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Keyboard, TextInput } from 'react-native';
import { validYearDate } from '../../utils/validYearDate';
import { TextInputMaskMethods } from 'react-native-masked-text';

export const useFormData = () => {
  const methods = useFormContext();
  const { data: userData } = useFetchMe();
  const [isLoadingCEP, setIsLoadingCEP] = useState<boolean>(false);
  const [isShowFormAddress, setIsShowFormAddress] = useState<boolean>(false);
  const [isFocusedOut, setIsFocusedOut] = useState<boolean>(false);

  const _zipCode = methods.watch('zipCode');
  const _street = methods.watch('street');
  const _district = methods.watch('district');
  const _city = methods.watch('city');
  const additionalDocumentIssueDate = methods.watch(
    'additionalDocumentIssueDate'
  );

  const handleZipCodeChange = async (zipCode: string) => {
    methods.setValue('zipCode', zipCode);

    setIsLoadingCEP(true);

    methods.clearErrors(['zipCode', 'street', 'district', 'city', 'state']);

    const data = await getAddressByZipCode(zipCode);

    setIsLoadingCEP(false);

    if (data.ibge) {
      setIsShowFormAddress(true);
      setIsFocusedOut(false);
      methods.setValue('street', data.logradouro);
      methods.setValue('district', data.bairro);
      methods.setValue('city', data.localidade);
      methods.setValue('state', data.uf);
    } else {
      clean_fields();
    }

    methods.setValue('number', '');
    methods.setValue('complement', '');
  };

  const clean_fields = () => {
    methods.setValue('street', '');
    methods.setValue('district', '');
    methods.setValue('city', '');
    methods.setValue('state', '');
    methods.setValue('number', '');
    methods.setValue('complement', '');
  };

  useEffect(() => {
    if (cleanMask(_zipCode).length === 8) {
      setIsShowFormAddress(true);
      if (_zipCode === userData?.address?.zipCode) {
        return;
      } else {
        Keyboard.dismiss();
        handleZipCodeChange(_zipCode);
      }
    } else {
      setIsShowFormAddress(false);
      clean_fields();
    }
  }, [_zipCode]);

  useEffect(() => {
    const validIssueDate = validYearDate(additionalDocumentIssueDate, 10);

    if (validIssueDate) {
      methods.setError('additionalDocumentIssueDate', {
        type: 'manual',
        message: 'Verifique o ano de emissão do RG',
      });
    }
  }, [additionalDocumentIssueDate]);

  const handleInputFocus = useCallback(() => {
    setIsFocusedOut(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocusedOut(false);
  }, []);

  const isStreetLength = useMemo(() => {
    return _street.length > 22;
  }, [_street]);

  const isDistrictLength = useMemo(() => {
    return _district.length > 14;
  }, [_district]);

  const isCityLength = useMemo(() => {
    return _city.length > 10;
  }, [_city]);

  return {
    methods,
    isFocusedOut,
    isLoadingCEP,
    isCityLength,
    isStreetLength,
    isDistrictLength,
    isShowFormAddress,
    handleInputFocus,
    handleInputBlur,
  };
};
