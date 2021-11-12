import { useState } from 'react';
import { Flex, Text, Avatar, IconButton, HStack, Image } from '@chakra-ui/react';
import { RiUser3Line, RiLoginBoxLine, RiNotificationLine, RiLogoutBoxRLine, RiSettings2Line } from 'react-icons/ri';

import { Input } from "../components/Form/Input";

export function Header() {
  const [logged, setLogged] = useState(false);

  return (
    <Flex
      as="header"
      w="100%"
      maxW="1480px"
      h="6rem"
      mx="auto"
      my="1rem"
      px="2rem"
      alignItems="center"
    >

      <Image src="/assets/logo.svg" h="42px" alt="Hospital Beneficente São Vicente de Paulo" />

      <Flex
        align="center"
        ml="auto"
      >
        {logged ? (

          <Flex
            align="center"
          >
            <HStack spacing="1rem" py="0.5rem" mr="2rem" pr="2rem" borderRightWidth="1px" borderColor="gray.700">
              <IconButton
                aria-label="Notificações"
                icon={<RiNotificationLine />}
                colorScheme="black"
                fontSize="1.2rem"
                isRound
              />
              <IconButton
                aria-label="Configurações"
                icon={<RiSettings2Line />}
                colorScheme="black"
                fontSize="1.2rem"
                isRound
              />
              <IconButton
                aria-label="Logout"
                icon={<RiLogoutBoxRLine />}
                colorScheme="black"
                fontSize="1.2rem"
                isRound
              />
            </HStack>

            <Avatar
              icon={<RiUser3Line fontSize="1.2rem" />}
              mr="0.5rem"
              bg="gray.700"
            />
            <Text
              fontSize="1.2rem"
              fontWeight="semibold"
            >
              Rafael Renck
            </Text>
          </Flex>
        ) : (
          <Flex
            as="form"
          >
            <HStack spacing="0.5rem" bg="gray.900">
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
                icon={<RiLoginBoxLine />}
                type="submit"
                colorScheme="primary"
                fontSize="1.2rem"
                isRound
              />
            </HStack>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
