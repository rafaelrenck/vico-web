import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";

import { api } from "../services/api";

type User = {
  fullName: string;
  shortName: string;
}

type SignInCredentials = {
  username: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "vico-token": token } = parseCookies();

    /* if (token) {
      api.get("/me").then(response => {
        console.log(response);
      })
    } */
  }, []);

  async function signIn({ username, password }: SignInCredentials) {
    try {
      const response = await api.post("/sign-in", {
        username,
        password,
      });

      const { token, fullName, shortName } = response.data;

      setUser({ fullName, shortName });

      setCookie(undefined, "vico-token", token, {
        maxAge: 60 * 60 * 24 * 10,
        path: "/",
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
