import { create } from 'zustand';
import {
  IBiometricNavigationProps,
  IPhotoDocumentProps,
  IPhotoTypeDocument,
} from './biometrics.interfaces';

export const useBiometric = create<IBiometricNavigationProps>((set) => ({
  route: '',
  picture: {
    front: 'IDENTITY_CARD_FRONT',
    back: 'IDENTITY_CARD_VERSE',
  },
  pictureSelected: {} as IPhotoDocumentProps,
  handleTypePicture: (type: IPhotoTypeDocument) =>
    set({
      picture: {
        front: type.front,
        back: type.back,
      },
    }),
  handleTypePictureSelected: (data: IPhotoDocumentProps) =>
    set({
      pictureSelected: {
        imageBase64: data.imageBase64,
        jwt: data.jwt,
        type: data.type,
        current: data.current,
      },
    }),
  handleChangeNavigation: (route: string) =>
    set({
      route: route,
    }),
}));
