import { Stack, Box, Text } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

type PaginationProps = {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  siblingsCount?: number;
  onPageChange: (page: number) => void;
}

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_, index) => {
    return from + 1 + index;
  }).filter(page => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  siblingsCount = 2,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];

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
          {(currentPage - 1) * 10 + 1} - {Math.min((currentPage - 1) * 10 + 10, totalCountOfRegisters)} de {totalCountOfRegisters}
        </Text>
      </Box>
      <Stack direction="row" spacing="0.5rem">
        {currentPage > (siblingsCount + 1) &&
          <>
            <PaginationItem page={1} onPageChange={onPageChange} />
            {currentPage > (siblingsCount + 2) &&
              <Text color="gray.300" width="1.5rem" textAlign="center">...</Text>
            }
          </>
        }
        {previousPages.length > 0 && previousPages.map(page =>
          <PaginationItem key={page} page={page} onPageChange={onPageChange} />
        )}
        <PaginationItem page={currentPage} onPageChange={onPageChange} isCurrent />
        {nextPages.length > 0 && nextPages.map(page =>
          <PaginationItem key={page} page={page} onPageChange={onPageChange} />
        )}
        {lastPage > (currentPage + siblingsCount) &&
          <>
            {lastPage > (currentPage + siblingsCount + 1) &&
              <Text color="gray.300" width="1.5rem" textAlign="center">...</Text>
            }
            <PaginationItem page={lastPage} onPageChange={onPageChange} />
          </>
        }
      </Stack>
    </Stack>
  );
}
