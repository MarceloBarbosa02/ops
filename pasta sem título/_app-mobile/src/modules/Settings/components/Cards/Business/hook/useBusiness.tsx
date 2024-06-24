import { showToast } from "@shared/store/useToastStore";
import { queryClient } from "@shared/services/queryClient";
import {
  useSearchCompanyById,
  useUpdateStatusCompany,
} from "@modules/Settings/hooks/useBusiness";
import { useUpdateCompanies } from "@modules/MenuPlus/hook/useCompany";
import { useBusinessStore } from "@shared/store/useBusinessStore";
import { ICompany } from "@shared/types/entities/Company";
import { useNavigation } from "@react-navigation/native";
import { BusinessProps } from "..";

export const useBusinessCard = ({ data }: BusinessProps) => {
  const { navigate } = useNavigation();
  const { mutate: mutateUpdateStatus } = useUpdateStatusCompany();
  const { mutate: mutateSearchById, isLoading: isLoadingById } =
    useSearchCompanyById();
  const { mutate: updateCompany } = useUpdateCompanies();
  const { handleSearchCompany } = useBusinessStore((store) => {
    return {
      handleSearchCompany: store.handleSearchCompany,
    };
  });

  const handleToggleStatus = (status: "ACTIVE" | "DISABLED") => {
    const payload = {
      uuid: data?.uuid,
      data: { status: status },
    };

    mutateUpdateStatus(payload, {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["/companies"] });
        showToast({
          type: "success",
          message: "Negócio atualizado com sucesso.",
        });
      },
      onError(error: any) {
        showToast({
          type: "error",
          message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
        });
      },
    });
  };

  const handleEditCompany = () => {
    mutateSearchById(data?.uuid, {
      onSuccess: (response: any) => {
        handleSearchCompany(response.data);
        navigate("EditCompany");
      },
      onError(error: any) {
        handleSearchCompany({} as ICompany);
        showToast({
          type: "error",
          message: error?.response?.data?.message ?? "Negócio não encontrado.",
        });
      },
    });
  };

  const handleUpdateCompanyDefault = async () => {
    if (!data?.isDefault) {
      updateCompany(data?.uuid, {
        onSuccess: () => {
          queryClient.resetQueries();

          showToast({
            type: "success",
            message: "Negócio alterado com sucesso",
          });
          navigate("DashboardRoutes");
        },
        onError(error: any) {
          showToast({
            type: "error",
            message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
          });
        },
      });
    }
  };

  return {
    isLoadingById,
    handleToggleStatus,
    handleEditCompany,
    handleUpdateCompanyDefault,
  };
};
