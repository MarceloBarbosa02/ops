export type THeaderSearch = {
  params: any;
  filters_active: any;
  label: string;
  handleRequestSearch(): void;
  handleSetMainSearchFilter(): void;
  handleRemoveAllFilters(): void;
  handleNavigation(): void;
};
