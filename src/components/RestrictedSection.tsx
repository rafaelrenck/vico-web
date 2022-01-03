import React from "react";
import { ReactNode, useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

type RootProps = {
  group: string;
  children?: ReactNode;
};

export function RestrictedSection({ group, children }: RootProps) {
  const { user, isAuthenticated } = useContext(AuthContext);
  return (
    <>{isAuthenticated && user.groups.some((g) => g === group) && children}</>
  );
}
