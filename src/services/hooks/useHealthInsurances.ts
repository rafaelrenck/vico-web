import { useQuery } from "react-query";

import { api } from "../../services/api";

type HealthInsurance = {
  id: string;
  health_insurance: string;
};

async function getHealthInsurances(): Promise<HealthInsurance[]> {
  const { data } = await api.get("sigh/health_insurances");
  return data;
}

export function useHealthInsurances() {
  return useQuery("healthInsurances", getHealthInsurances, {
    staleTime: 1000 * 60 * 60,
  });
}
