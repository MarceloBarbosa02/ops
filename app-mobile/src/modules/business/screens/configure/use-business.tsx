import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { cleanMask } from 'masks-br';

import {
  useCreateCompany,
  useFetchCompanies,
  useFetchMe,
  useSearchCompanyByDocument,
} from '@/shared/queries';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { ICompany } from '@/shared/store/company/company.interfaces';
import { ValidateCNPJ } from '@/shared/utils/validations';

import { useBusinessStore, PersonTypes } from '../../store';
import {
  CreateBusinessSchema,
  SearchBusinessSchema,
  TCreateBusinessSchema,
  TSearchBusinessSchema,
} from '../../validations';

export const useConfigureBusiness = () => {
  const [isNotError, setIsNotError] = useState<string>('');
  const { data: userData } = useFetchMe();
  const { data: companiesData, refetch: refetchCompanies } =
    useFetchCompanies();

  const { mutate: mutateCreateCompany, isPending: isPendingCreateCompany } =
    useCreateCompany();

  const { mutate: mutateSearchCompany, isPending: isPendingSearchCompany } =
    useSearchCompanyByDocument();

  const {
    step,
    person,
    document,
    companyData,
    handleSetStep,
    handleAddDocument,
    handleChangePerson,
    handleSearchCompany,
  } = useBusinessStore((store) => {
    return {
      step: store.step,
      person: store.person,
      document: store.document,
      companyData: store.companyData,
      handleSetStep: store.handleSetStep,
      handleAddDocument: store.handleAddDocument,
      handleChangePerson: store.handleChangePerson,
      handleSearchCompany: store.handleSearchCompany,
    };
  });

  const methodsCreate = useForm<TCreateBusinessSchema>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(CreateBusinessSchema),
    defaultValues: {
      nickname:
        person === 'PHYSICAL_PERSON'
          ? userData?.name
          : companyData.nickname
            ? companyData.nickname
            : companyData.fantasyName,
      isDefault: companyData.isDefault || true,
    },
  });

  const methodsSearch = useForm<TSearchBusinessSchema>({
    mode: 'onChange',
    resolver: zodResolver(SearchBusinessSchema),
    defaultValues: {
      companyNumber: '',
    },
  });
  const _companyNumber = methodsSearch.watch('companyNumber');

  const handleSubmitCreateCompany = (dataCreate: TCreateBusinessSchema) => {
    const payload = {
      type: person as PersonTypes,
      document: document,
      nickname: dataCreate.nickname
        ? dataCreate.nickname
        : person === 'PHYSICAL_PERSON'
          ? userData?.name
          : companyData?.fantasyName,
      isDefault: dataCreate.isDefault,
    };

    mutateCreateCompany(payload, {
      onSuccess() {
        refetchCompanies();
        showToast({
          type: 'success',
          message: 'Negócio registrado com sucesso!.',
        });
        router.push('/(private)/(tabs)/dash');
      },
      onError(error: any) {
        showToast({
          type: 'error',
          message: error?.response?.data?.message ?? 'Ops! Algo deu errado.',
        });
      },
    });
  };

  const handleSubmitSearchCNPJ = ({ companyNumber }: TSearchBusinessSchema) => {
    console.log({ companyNumber });
    mutateSearchCompany(cleanMask(companyNumber), {
      onSuccess({ data }) {
        console.log({ data });
        handleSearchCompany(data);
        handleAddDocument(companyNumber);
        // router.push('/(private)/(modais)/add-business');
      },
      onError(error: any) {
        handleSearchCompany({} as ICompany);
        error?.response?.data?.message !== 'CNPJ não encontrado'
          ? showToast({
              type: 'error',
              message: error?.response?.data?.message,
            })
          : setIsNotError(error?.response?.data?.message);
      },
    });
  };

  useEffect(() => {
    if (
      cleanMask(_companyNumber)?.length === 14 &&
      ValidateCNPJ(_companyNumber)
    ) {
      handleSubmitSearchCNPJ({ companyNumber: _companyNumber });
    } else {
      handleSearchCompany({} as ICompany);
    }
  }, [_companyNumber]);

  const handleNavigationLegalPerson = () => {};

  const handleNavigationPhysicalPerson = () => {};

  const handleSelectOptionPerson = (person: PersonTypes) => {
    if (person === 'PHYSICAL_PERSON') {
      handleChangePerson(person);
      handleAddDocument(userData?.document!);
      router.push('/(private)/(stack)/(configure)/config-physical-person');
    } else {
      handleChangePerson(person);
      router.push('/(private)/(stack)/(configure)/config-legal-person');
    }
  };

  return {
    userData,
    isNotError,
    companyData,
    methodsSearch,
    methodsCreate,
    isPendingSearchCompany,
    handleSubmitSearchCNPJ,
    handleSelectOptionPerson,
    handleSubmitCreateCompany,
    handleNavigationLegalPerson,
    handleNavigationPhysicalPerson,
  };
};
