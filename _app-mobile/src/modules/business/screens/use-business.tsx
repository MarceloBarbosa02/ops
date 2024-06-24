import { router } from 'expo-router';
import { useBusinessStore } from '../store/use-business-store';
import { PersonTypes } from '../store/use-business.types';
import { useFetchCompanies } from '@/shared/queries';
import { useMemo, useState } from 'react';
import { useCompanyStore, useFetchMe } from '@/shared';

export const useBusiness = () => {
  const { data: companiesData } = useFetchCompanies();
  const { data: userData } = useFetchMe();
  const { step, handleChangePerson, handleAddDocument, handleSetStep } =
    useBusinessStore((store) => {
      return {
        step: store.step,
        handleSetStep: store.handleSetStep,
        handleAddDocument: store.handleAddDocument,
        handleChangePerson: store.handleChangePerson,
      };
    });

  const isPermittedCompany = userData?.verificationStatus === 'PENDING_DATA';

  const businessList = useMemo(() => {
    if (companiesData?.data) {
      return companiesData.data;
    }
  }, [companiesData]);

  const handleNavigationNew = () => {
    handleSetStep('profile');
    if (Number(businessList?.length) < 1) {
      return router.push('/(private)/(stack)/identification');
    }
    return router.push('/(private)/(modais)/search-business');
  };

  const handleSelectOptionPerson = (person: PersonTypes) => {
    if (person === 'PHYSICAL_PERSON') {
      handleChangePerson(person);
      handleAddDocument(userData?.document!);
      router.push('/(private)/(modais)/add-business');
    } else {
      handleChangePerson(person);
      router.push('/(private)/(modais)/search-business');
    }
  };

  const handleNavigationOut = () => {
    handleSetStep('');
    if (step === 'profile') {
      return router.push('/(private)/(stack)/business');
    } else {
      return router.navigate('/(private)/(tabs)/');
    }
  };

  const handleNavigationBack = () => {
    handleSetStep('');
    router.back();
  };

  const handleOutConfigure = () => {
    if (Number(businessList?.length) > 0) {
      router.push('/(private)/(stack)/out-configure-business');
    } else {
      router.push('/(private)/(tabs)/');
    }
  };

  return {
    userData,
    businessList,
    isPermittedCompany,
    handleOutConfigure,
    handleNavigationOut,
    handleNavigationNew,
    handleNavigationBack,
    handleSelectOptionPerson,
  };
};
