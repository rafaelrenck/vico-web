import React, { ReactNode } from "react";
import { Box, Text, Stack } from "@chakra-ui/react";

type NavSectionProps = {
  title: string;
  children?: ReactNode;
};

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text
        fontWeight="semibold"
        color="gray.400"
        fontSize="small"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Stack spacing="0.5rem" mt="1rem" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
