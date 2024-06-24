import {
  useCreateCompany,
  useFetchCompanies,
  useFetchMe,
  useSearchCompanyByDocument,
} from '@/shared/queries';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PersonTypes } from '../store/use-business.types';
import { useBusinessStore } from '../store/use-business-store';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { router } from 'expo-router';
import {
  SearchBusinessSchema,
  TSearchBusinessSchema,
  CreateBusinessSchema,
  TCreateBusinessSchema,
} from '../validations';
import { ICompany } from '@/shared/store/company/company.interfaces';
import { useUpdateCompanies, useUpdateNicknameCompany } from '@/shared';

export const useAddBusiness = () => {
  const [isNotError, setIsNotError] = useState<string>('');
  const {
    step,
    person,
    document,
    companyData,
    handleAddDocument,
    handleSearchCompany,
  } = useBusinessStore((store) => {
    return {
      step: store.step,
      person: store.person,
      document: store.document,
      companyData: store.companyData,
      handleAddDocument: store.handleAddDocument,
      handleSearchCompany: store.handleSearchCompany,
    };
  });
  const { data: userData } = useFetchMe();
  const { data: companiesData, refetch: refetchCompanies } =
    useFetchCompanies();

  const { mutate: mutateCreateCompany, isPending: isPendingCreateCompany } =
    useCreateCompany();

  const { mutate: mutateSearchCompany, isPending: isPendingSearchCompany } =
    useSearchCompanyByDocument();

  const { mutate: mutateUpdateCompanies, isPending: isPendingUpdateCompanies } =
    useUpdateCompanies();

  const {
    mutate: mutateUpdateNicknameCompany,
    isPending: isPendingUpdateNicknameCompany,
  } = useUpdateNicknameCompany();

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

  const methodsEdit = useForm<TCreateBusinessSchema>({
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
    criteriaMode: 'all',
    resolver: zodResolver(SearchBusinessSchema),
    defaultValues: {
      companyNumber: '',
    },
  });

  const isBusiness = useMemo(() => {
    return Number(companiesData?.data.length) > 1;
  }, [companiesData]);

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
        router.navigate('/(private)/(stack)/business');
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
    mutateSearchCompany(companyNumber!, {
      onSuccess({ data }) {
        handleSearchCompany(data);
        handleAddDocument(companyNumber!);
        router.push('/(private)/(modais)/add-business');
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

  const handleEditCompany = async (dataCreate: TCreateBusinessSchema) => {
    const payload = {
      uuid: companyData.uuid,
      data: {
        status: companyData.status,
        nickname: dataCreate.nickname,
        isDefault: dataCreate.isDefault,
      },
    };

    mutateUpdateNicknameCompany(payload, {
      onSuccess: () => {
        refetchCompanies();
        showToast({
          type: 'success',
          message: 'Negócio atualizado com sucesso',
        });
        router.navigate('/(private)/(stack)/business');
      },
      onError(error: any) {
        showToast({
          type: 'error',
          message: error?.response?.data?.message ?? 'Ops! Algo deu errado.',
        });
      },
    });
  };

  const handleNavigationClose = () => {
    if (step === 'profile') {
      return router.navigate('/(private)/(stack)/business');
    } else {
      return router.push('/(private)/(stack)/out-configure-business');
    }
  };

  return {
    step,
    isNotError,
    isBusiness,
    methodsEdit,
    methodsCreate,
    methodsSearch,
    isPendingCreateCompany,
    isPendingSearchCompany,
    isPendingUpdateNicknameCompany,
    handleNavigationClose,
    handleEditCompany: methodsEdit.handleSubmit(handleEditCompany),
    handleSearchCNPJ: methodsSearch.handleSubmit(handleSubmitSearchCNPJ),
    handleCreateCompany: methodsCreate.handleSubmit(handleSubmitCreateCompany),
  };
};
