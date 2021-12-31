import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type BodyProps = {
  children?: ReactNode;
};

export function Body({ children }: BodyProps) {
  return (
    <Flex
      flex="1"
      as="main"
      w="100%"
      maxW="1480px"
      mx="auto"
      px="2rem"
      py="2rem"
    >
      {children}
    </Flex>
  );
}
