import { Stack, Button, Box, Text } from '@chakra-ui/react';


export function Pagination() {
  return (
    <Stack
      direction="row"
      spacing="1.5rem"
      align="center"
      justify="space-between"
      mt="2rem"
    >
      <Box flex="1">
        <Text textAlign="right">
          0 - 10 de 100
        </Text>
      </Box>
      <Stack direction="row" spacing="0.5rem">
        <Button
          size="sm"
          fontSize="xs"
          width="1rem"
          borderRadius="full"
          colorScheme="primary"
          disabled
          _disabled={{
            bg: "primary.500",
            cursor: "pointer",
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="1rem"
          bg="gray.700"
          borderRadius="full"
          _hover={{
            bg: "gray.500",
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="1rem"
          bg="gray.700"
          borderRadius="full"
          _hover={{
            bg: "gray.500",
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="1rem"
          bg="gray.700"
          borderRadius="full"
          _hover={{
            bg: "gray.500",
          }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  );
}
