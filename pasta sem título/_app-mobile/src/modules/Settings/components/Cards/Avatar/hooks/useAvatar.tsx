import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { showToast } from "@shared/store/useToastStore";
import { handleSendAvatar } from "@modules/Settings/hooks/useProfile";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";

export const useAvatar = () => {
  const { refetch: refetchUser } = useFetchMe();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");

  const handleChangeImage = (img: string) => {
    setImage(img);
  };

  const handlePickImage = async () => {
    setIsLoading(true);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (result?.canceled) {
      showToast({
        type: "error",
        message: "Usuário cancelou o acesso.",
      });
    }

    if (result.assets) {
      const uri = result.assets[0].uri;
      const response = await handleSendAvatar(uri);

      if (response) {
        setImage(uri);
        refetchUser();
      }
    }

    setIsLoading(false);
  };

  return {
    image,
    isLoading,
    handlePickImage,
    handleChangeImage,
  };
};
