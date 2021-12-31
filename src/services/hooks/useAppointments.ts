import { useQuery } from "react-query";

import { api } from "../../services/api";

type Filter = {
  month: string;
  insurance: string;
  amb: boolean;
  ext: boolean;
  int: boolean;
  invoice: string;
  patient: string;
};

type Appointment = {
  id_fia: string;
  date: string;
  hour: string;
  type: string;
  id_patient: string;
  patient: string;
  date_of_birth: string;
};

type getAppointmentsResponse = {
  appointments: Appointment[];
  totalCount: number;
};

async function getAppointments(
  currentPage: number,
  filter: Filter
): Promise<getAppointmentsResponse> {
  const { data, headers } = await api.get("sigh/appointments", {
    params: {
      page: currentPage,
      insurance: filter.insurance,
      month: filter.month,
      amb: filter.amb,
      ext: filter.ext,
      int: filter.int,
      invoice: filter.invoice,
      patient: filter.patient,
    },
  });

  return { appointments: data.appointments, totalCount: data.totalCount };
}

export function useAppointments(currentPage: number, filter: Filter) {
  return useQuery(
    ["appointments", { currentPage, filter }],
    () => getAppointments(currentPage, filter),
    {
      staleTime: 1000 * 60 * 10,
    }
  );
}
