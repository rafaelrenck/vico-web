import { Stack, Box, Text } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

interface PaginationProps {
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
          0 - 10 de 100
        </Text>
      </Box>
      <Stack direction="row" spacing="0.5rem">
        {currentPage > (siblingsCount + 1) && 
          <>
            <PaginationItem page={1} />
            {currentPage > (siblingsCount + 2) &&
              <Text color="gray.300" width="1.5rem" textAlign="center">...</Text>
            }
          </>
        }
        {previousPages.length > 0 && previousPages.map(page => 
          <PaginationItem key={page} page={page} />
        )}
        <PaginationItem page={currentPage} isCurrent />
        {nextPages.length > 0 && nextPages.map(page => 
          <PaginationItem key={page} page={page} />
        )}
        {lastPage > (currentPage + siblingsCount) &&
          <>
            {lastPage > (currentPage + siblingsCount + 1) &&
              <Text color="gray.300" width="1.5rem" textAlign="center">...</Text>
            }
            <PaginationItem page={lastPage} />
          </>
        }
      </Stack>
    </Stack>
  );
}
