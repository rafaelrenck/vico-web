import { Children, cloneElement, ReactElement } from 'react';
import { HStack, VStack, Text } from '@chakra-ui/react';

interface MasonryGridProps {
  columns: number;
  children: ReactElement[];
}

export function MasonryGrid({ columns, children, ...rest }: MasonryGridProps) {
  const columnsCount = Array.apply(null, Array(columns));

  return (
    <HStack
      spacing="2rem"
    >
      {columnsCount.map((_, index) => (
        <VStack key={index} flex="1" alignItems="flex-start" justifyContent="flex-start" spacing="2rem"><Text>{index}</Text></VStack>
      ))}
    </HStack>
  );

  /* return (
    <Grid
      templateColumns={column}
      gap="2rem"
      sx={{
        "& > div": {
          backgroundColor: "black",
          alignSelf: "start"
        }
      }}
    >
      {children && (
        Children.map(children, child => (
          <>
            {cloneElement(child, {style: {...child.props.style, "grid-column": child.props.column }})}
          </>
        ))
      )}
    </Grid>
  ); */
}
