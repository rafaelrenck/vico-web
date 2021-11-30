import { Flex, Box, Text, Avatar, IconButton, HStack } from '@chakra-ui/react';
import { BiUser, BiBell, BiCog, BiPowerOff } from "react-icons/bi";


export function Profile() {
  return (
    <HStack
      spacing="3rem"
    >
      <HStack spacing="1rem">
        <Avatar
          icon={<BiUser fontSize="1.2rem" />}
          bg="gray.700"
        />
        <Text fontSize="1.2rem" fontWeight="semibold">
          Rafael Renck
        </Text>
      </HStack>
      <HStack spacing="1rem" pl="2rem" borderLeftWidth="1px" borderColor="gray.700">
        <IconButton
          aria-label="Notificações"
          icon={<BiBell />}
          colorScheme="black"
          fontSize="1.2rem"
          isRound
        />
        <IconButton
          aria-label="Configurações"
          icon={<BiCog />}
          colorScheme="black"
          fontSize="1.2rem"
          isRound
        />
        <IconButton
          aria-label="Logout"
          icon={<BiPowerOff />}
          colorScheme="black"
          fontSize="1.2rem"
          isRound
        />
      </HStack>
    </HStack>
  );
}
