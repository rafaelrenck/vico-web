import { Flex } from "@chakra-ui/react";

export function Body({ children }) {
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
