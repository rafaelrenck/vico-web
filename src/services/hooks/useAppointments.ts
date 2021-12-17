import { useQuery } from 'react-query';

import { api } from '../../services/api';

type Appointment = {
  id_fia: string;
  date: string;
  hour: string;
  type: string;
  id_patient: string;
  patient: string;
  date_of_birth: string;
}

export function useAppointments(filter) {
  return useQuery<Appointment[]>("appointments", async () => {
    const { data } = await api.get(`sigh/appointments?insurance=${encodeURIComponent(filter.insurance)}&month=${encodeURIComponent(filter.month)}&amb=${encodeURIComponent(filter.amb)}&ext=${encodeURIComponent(filter.ext)}&int=${encodeURIComponent(filter.int)}&invoice=${encodeURIComponent(filter.invoice)}&patient=${encodeURIComponent(filter.patient)}`);
    return data;
  });
}