import { ReactNode, useContext } from "react";
import { Flex, Text, Icon } from '@chakra-ui/react';
import { FiAlertTriangle } from "react-icons/fi";


import { AuthContext } from "../contexts/AuthContext";

type RootProps = {
  group: string;
  children?: ReactNode;
}

export function RestrictedPage({ group, children }: RootProps) {
  const { user, isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {(isAuthenticated && user.groups.some(g => g.group === group)) ? (
        children
      ) : (
        <Flex
          flex="1"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="1.5rem" bg="gray.900" p="2rem 3rem" borderRadius="2rem">
            <Icon as={FiAlertTriangle} mr="1rem" fontSize="2rem" color="primary.500" />
            Você não tem permissão para acessar esta página.
          </Text>
        </Flex>
      )}
    </>
  );
}
