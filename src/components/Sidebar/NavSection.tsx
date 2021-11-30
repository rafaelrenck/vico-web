import { ReactNode } from "react";
import { Box, Text, Stack } from "@chakra-ui/react";

interface NavSectionProps {
  title: string;
  children?: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="semibold" color="gray.400" fontSize="small" textTransform="uppercase">
        {title}
      </Text>
      <Stack spacing="1rem" mt="1rem" align="stretch">
        { children }
      </Stack>
    </Box>
  );
}
