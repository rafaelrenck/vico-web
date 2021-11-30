import { Stack, Button, Box, Text } from '@chakra-ui/react';


interface PaginationItemProps {
  page: number;
  isCurrent?: boolean;
}

export function PaginationItem({ page, isCurrent = false }: PaginationItemProps) {
  if (isCurrent) {
    return (
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
        {page}
      </Button>
    );
  }

  return (
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
      {page}
    </Button>
  );
}
