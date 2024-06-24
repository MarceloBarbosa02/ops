import { SALES_CHARTS } from "@shared/constants";
import { api } from "@shared/services/api";
import { ISalesChartResponse } from "@shared/types";
import { useQuery } from "@tanstack/react-query";

async function fetchChart(optionSelect: number) {
  const { data } = await api.get<ISalesChartResponse>(
    SALES_CHARTS(optionSelect)
  );
  return data;
}

export function useFetchChart(optionSelect: number) {
  return useQuery(["/chart", optionSelect], () => fetchChart(optionSelect));
}
