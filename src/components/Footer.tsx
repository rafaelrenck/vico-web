import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type FooterProps = {
  children?: ReactNode;
};

export function Footer({ children }: FooterProps) {
  return (
    <Flex
      as="footer"
      w="100%"
      maxW="1480px"
      mx="auto"
      mb="1rem"
      px="2rem"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Flex>
  );
}
