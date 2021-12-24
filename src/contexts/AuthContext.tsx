import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";

import { api } from "../services/api";

type Group = {
  id: string;
  group: string;
}

type User = {
  fullName: string;
  shortName: string;
  groups: Group[];
}

type SignInCredentials = {
  username: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
  user: User;
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "vico-token": token } = parseCookies();

    if (token) {
      api.get("/me").then(response => {
        setUser(response.data);
      }).catch(() => {
        destroyCookie(undefined, "vico-token");
      });
    }
  }, []);

  async function signIn({ username, password }: SignInCredentials) {
    try {
      const response = await api.post("/sign-in", {
        username,
        password,
      });

      const { token, user } = response.data;

      setUser(user);

      setCookie(undefined, "vico-token", token, {
        maxAge: 60 * 60 * 24 * 10,
        path: "/",
      });

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

    } catch (err) {


    }
  }

  async function signOut() {
    Router.push("/");
    setUser(null);
    destroyCookie(undefined, "vico-token");
    api.defaults.headers['Authorization'] = null;
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
