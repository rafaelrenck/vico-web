import { ReactNode, useContext } from "react";
import { Flex, Text } from '@chakra-ui/react';

import { AuthContext } from "../contexts/AuthContext";

type RootProps = {
  group: string;
  children?: ReactNode;
}

export function ProtectedPage({ group, children }: RootProps) {
  const { user, isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {(isAuthenticated && user.groups.some(g => g.group === group)) ? (
        children
      ) : (
        <Flex
          flex="1"
          bg="green"
        >
          <Text>Você não tem permissão para acessar esta página.</Text>
        </Flex>
      )}
    </>
  );
}
