import { Button } from '@chakra-ui/react';


type PaginationItemProps = {
  page: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ page, isCurrent, onPageChange }: PaginationItemProps) {
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
          cursor: "default",
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
      onClick={() => onPageChange(page)}
    >
      {page}
    </Button>
  );
}
