import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';

export function Home() {
  return (
    <Box
      as="section"
      flex="1"
    >
      <Box
        borderRadius="18px"
        bg="gray.800"
        p="2rem"
      >
        <Flex mb="4rem" alignItems="center" justifyContent="space-between">
          <Heading size="lg" textTransform="uppercase">Home</Heading>
        </Flex>
      </Box>
    </Box>
  );
}
