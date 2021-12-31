import React, {
  Children,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { HStack, VStack, Box } from "@chakra-ui/react";
import ReactDOMServer from "react-dom/server";

type MasonryGridProps = {
  columns: number;
  children: ReactElement[];
};

export function MasonryGrid({ columns, children }: MasonryGridProps) {
  const columnsContent = useState(Array.apply(0, Array(columns)));
  const columnRef = useRef([]);

  useEffect(() => {
    Children.map(children, (child) => {
      const min = columnRef.current.indexOf(
        columnRef.current.reduce(
          (prev, curr) => {
            return prev.clientHeight > curr.clientHeight ? curr : prev;
          },
          { clientHeight: 9999999 }
        )
      );
      columnRef.current[min].innerHTML += ReactDOMServer.renderToString(child);
    });
  });

  return (
    <HStack spacing="2rem" alignItems="flex-start">
      {columnsContent.map((_, index) => (
        <VStack
          key={index}
          flex="1"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing="2rem"
          ref={(element) => (columnRef.current[index] = element)}
        >
          <Box></Box>
        </VStack>
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
