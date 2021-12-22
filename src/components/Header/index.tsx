import { useContext } from 'react';
import { HStack, Flex, Box, IconButton, Icon, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from "./Logo";
import { SignInForm } from "./SignInForm";
import { Profile } from "./Profile";
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';
import { AuthContext } from '../../contexts/AuthContext';

export function Header() {
  const { isAuthenticated } = useContext(AuthContext);
  const { onOpen } = useSidebarDrawer();

  const showSidebarDrawer = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW="1480px"
      minH="6rem"
      direction={{
        base: "column",
        md: "row",
      }}
      mx="auto"
      mt="1rem"
      px="2rem"
      align={{
        base: "stretch",
        md: "center",
      }}
      justify={{
        base: "flex-start",
        md: "space-between",
      }}
      gridGap="2rem"
    >
      <HStack>
        { !showSidebarDrawer && (
          <IconButton
            aria-label="Abre a navegação"
            h="100%"
            icon={<Icon as={RiMenuLine} />}
            fontSize="2rem"
            variant="unstyled"
            onClick={onOpen}
            mr="1rem"
          />
        )}
        <Logo />
      </HStack>

      <Box>
        {isAuthenticated ? (
          <Profile />
        ) : (
          <SignInForm />
        )}
      </Box>
    </Flex>
  );
}
