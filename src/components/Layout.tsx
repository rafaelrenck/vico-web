import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

import { Header } from "./Header";
import { Body } from "./Body";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

type RootProps = {
  children?: ReactNode;
};

export function Layout({ children }: RootProps) {
  return (
    <Flex
      w="100vw"
      minHeight="100vh"
      direction="column"
      align="center"
      justify="space-between"
    >
      <Header />
      <Body>
        <Sidebar />
        <Flex
          as="section"
          flex="1"
          direction="column"
          align="stretch"
          justify="flex-start"
        >
          <Flex
            flex="1"
            direction="column"
            align="stretch"
            justify="flex-start"
            borderRadius="1.5rem"
            bg="gray.800"
            p="2rem"
          >
            {children}
          </Flex>
        </Flex>
      </Body>
      <Footer>&copy; 2021 - Hospital São Vicente de Paulo</Footer>
    </Flex>
  );
}
