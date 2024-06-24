import { TTypeDocumentProps } from './biometrics.types';

export interface IBiometricNavigationProps {
  route: string;
  picture: IPhotoTypeDocument;
  pictureSelected: IPhotoDocumentProps;
  handleChangeNavigation(route: string): void;
  handleTypePicture(type: IPhotoTypeDocument): void;
  handleTypePictureSelected(data: IPhotoDocumentProps): void;
}

export interface IPhotoDocumentProps {
  type: TTypeDocumentProps;
  current: TTypeDocumentProps;
  imageBase64: string;
  jwt: string;
}

export interface IPhotoTypeDocument {
  front: TTypeDocumentProps;
  back: TTypeDocumentProps;
}

export interface DataPhoto {
  base64: string;
  encrypted: string;
}
