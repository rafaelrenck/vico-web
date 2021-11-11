import { Stack, Box, Text, Link, Icon } from "@chakra-ui/react";
import { RiHome2Line, RiPhoneLine } from "react-icons/ri";
import { BiBone, BiVial, BiBox } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";

export function Sidebar() {
  return (
    <Box
      as="aside"
      w="16rem"
      mr="2rem"
    >
      <Stack spacing="3rem" align="flex-start">
{/*         <Box>
          <Text fontWeight="semibold" color="gray.400" fontSize="small" textTransform="uppercase">
            Geral
          </Text>
          <Stack spacing="1rem" mt="1rem" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiHome2Line} fontSize="1.2rem" />
              <Text ml="1rem">Página inicial</Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiPhoneLine} fontSize="1.2rem" />
              <Text ml="1rem">Ramais e telefones úteis</Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={BiBone} fontSize="1.2rem" />
              <Text ml="1rem">Animati Pacs</Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={BiVial} fontSize="1.2rem" />
              <Text ml="1rem">Laboratório Fontana</Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={BiBox} fontSize="1.2rem" />
              <Text ml="1rem">Repositório de Documentos</Text>
            </Link>
          </Stack>
        </Box>
 */}
        <Box>
          <Text fontWeight="semibold" color="gray.400" fontSize="small" textTransform="uppercase">
            Faturamento
          </Text>
          <Stack spacing="1rem" mt="1rem" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={AiOutlinePaperClip} fontSize="1.2rem" />
              <Text ml="1rem">Anexar Documentos</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
