import { Stack, IconButton, Icon } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { BiCheck, BiUser, BiLockOpenAlt } from "react-icons/bi";

import { Input } from "../Form/Input";

type SignInFormData = {
  username: string;
  password: string;
}

const SignInFormSchema = yup.object().shape({
  username: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export function SignInForm() {
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm({
    resolver: yupResolver(SignInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {

  }

  return (
    <Stack
      as="form"
      direction={{
        base: "row",
        md: "column",
        lg: "row"
      }}
      spacing="1rem"
      bg="gray.900"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <Input
        type="text"
        name="username"
        label="Usuário"
        icon={<Icon as={BiUser} />}
        w="14rem"
        {...register("username")}
        error={errors.username}
      />
      <Input
        type="password"
        name="password"
        label="Senha"
        icon={<Icon as={BiLockOpenAlt} />}
        w="14rem"
        {...register("password")}
        error={errors.password}
      />
      <IconButton
        aria-label="Login"
        icon={<BiCheck />}
        type="submit"
        colorScheme="primary"
        fontSize="1.5rem"
        isRound
        isLoading={isSubmitting}
      />
    </Stack>
  );
}
