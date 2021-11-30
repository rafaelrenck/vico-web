import { IconButton, HStack } from '@chakra-ui/react';
import { BiCheck } from "react-icons/bi";

import { Input } from "../Form/Input";


export function SignInForm() {
  return (
    <HStack as="form" spacing="1rem" bg="gray.900">
      <Input
        type="text"
        name="username"
        label="Usuário"
      />
      <Input
        type="password"
        name="password"
        label="Senha"
      />
      <IconButton
        aria-label="Login"
        icon={<BiCheck />}
        type="submit"
        colorScheme="primary"
        fontSize="1.5rem"
        isRound
      />
    </HStack>
  );
}
