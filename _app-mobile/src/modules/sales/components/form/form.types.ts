export interface UTMProps {
  utmCampaign: UTMItemProps;
  utmContent: UTMItemProps;
  utmMedium: UTMItemProps;
  utmSource: UTMItemProps;
  utmSrc: UTMItemProps;
  utmTerm: UTMItemProps;
}
export interface UTMItemProps {
  text: string;
  isActive: boolean;
}

export interface ItemUTMFilterProps {
  title: string;
  name: string;
  nameCheck: string;
  isBorder?: boolean;
}
