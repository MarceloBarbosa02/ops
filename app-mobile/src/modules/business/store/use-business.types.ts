import { ICompany } from '@/shared/store/company/company.interfaces';

export type PersonTypes = 'LEGAL_PERSON' | 'PHYSICAL_PERSON';

export type TBusinessContext = {
  person: PersonTypes | '';
  companyData: ICompany;
  document: string;
  step: string;

  handleChangePerson(person: PersonTypes | ''): void;
  handleSearchCompany(data: ICompany): void;
  handleAddDocument(data: string): void;
  handleSetStep(data: string): void;
};
