import axios, { AxiosError } from "axios";
import { destroyCookie, parseCookies } from "nookies";

const { "vico-token": token } = parseCookies();

export const api = axios.create({
  baseURL: "http://localhost:3333/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response.status === 401) {
      destroyCookie(undefined, "vico-token");
    }
    return Promise.reject(error);
  }
);
