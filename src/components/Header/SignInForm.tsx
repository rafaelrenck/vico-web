import { Stack, IconButton } from '@chakra-ui/react';
import { BiCheck } from "react-icons/bi";

import { Input } from "../Form/Input";

export function SignInForm() {
  return (
    <Stack
      as="form"
      direction={{
        base: "row",
        md: "column",
        lg: "row"
      }}
      spacing="1rem"
    >
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
    </Stack>
  );
}
