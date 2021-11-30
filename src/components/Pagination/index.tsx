import { Stack, Box, Text } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

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
        <PaginationItem page={1} isCurrent />
        <PaginationItem page={2} />
        <PaginationItem page={3} />
        <PaginationItem page={4} />
      </Stack>
    </Stack>
  );
}
