import { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import { Logo } from "./Logo";
import { SignInForm } from "./SignInForm";
import { Profile } from "./Profile";


export function Header() {
  const [logged, setLogged] = useState(false);

  return (
    <Flex
      as="header"
      w="100%"
      maxW="1480px"
      h="6rem"
      mx="auto"
      mt="1rem"
      px="2rem"
      align="center"
      justify="space-between"
    >

      <Logo />

      <Box>
        {logged ? (
          <Profile />
        ) : (
          <SignInForm />
        )}
      </Box>
    </Flex>
  );
}
