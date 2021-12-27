import { Table, Thead, Tr, Th, Tbody, Td, Text, Flex, IconButton, HStack, Icon, Stack } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { BiFile, BiSpreadsheet, BiBone, BiVial, BiTime } from "react-icons/bi";
import { FaSignature } from 'react-icons/fa';
import { AiOutlinePaperClip } from "react-icons/ai";
import { IconAttachedFile } from './IconAttachedFile';

export default function TableAppointments({ appointments, ...rest }) {
  return (
    <Table colorScheme="whiteAlpha" appointments={appointments}>
      <Thead>
        <Tr>
          <Th textAlign="center" pl="1rem" pr="2rem">Data</Th>
          <Th w="100%">Paciente</Th>
          <Th textAlign="center" pr="2rem">Tipo</Th>
          <Th textAlign="center" px="0" minW="4rem">Conta</Th>
          <Th textAlign="center" px="0" minW="4rem">TISS</Th>
          <Th textAlign="center" px="0" minW="4rem">Scan</Th>
          <Th textAlign="center" px="0" minW="4rem">RX</Th>
          <Th textAlign="center" px="0" minW="4rem">Lab</Th>
          <Th textAlign="center" pl="2rem" pr="1rem">Upload</Th>
        </Tr>
      </Thead>
      <Tbody>
        {appointments.map(appointment => {
          return (
            <Tr key={appointment.id_fia}>
              <Td textAlign="center" whiteSpace="nowrap" pl="1rem" pr="2rem">
                <Stack alignItems="center" spacing="0.2rem" fontSize="0.8rem">
                  <Flex alignItems="center">
                    <Text>{format(parseISO(appointment.date), 'dd/MM/yy')}</Text>
                  </Flex>
                  <Flex alignItems="center" color="gray.600">
                    <Icon as={BiTime} mr="0.5rem" />
                    <Text>{appointment.hour.substring(0, 5)}</Text>
                  </Flex>
                </Stack>
              </Td>
              <Td>
                <Stack spacing="0.2rem">
                  <Text fontWeight="semibold">{appointment.patient}</Text>
                  <HStack spacing="2rem" color="gray.600" fontSize="0.8rem">
                    <Text>
                      Registro:
                      <Text as="span" ml="0.5rem" fontWeight="bold">{appointment.id_patient}</Text>
                    </Text>
                  </HStack>
                </Stack>
              </Td>
              <Td textAlign="center" pr="2rem">
                <Text color="gray.600">{appointment.type}</Text>
              </Td>
              <Td textAlign="center" px="0">
                <IconButton
                  aria-label="Conta Corrente"
                  icon={<BiFile />}
                  colorScheme="black"
                  fontSize="1.2rem"
                  isRound
                />
              </Td>
              <Td textAlign="center" px="0">
                <IconButton
                  aria-label="Enviar arquivo"
                  icon={<BiSpreadsheet />}
                  colorScheme="black"
                  fontSize="1.2rem"
                  isRound
                />
              </Td>
              <Td textAlign="center" px="0">
                <IconAttachedFile fia={appointment.id_fia} />
              </Td>
              <Td textAlign="center" px="0">
                <IconButton
                  aria-label="Enviar arquivo"
                  icon={<BiBone />}
                  colorScheme="black"
                  fontSize="1.2rem"
                  isRound
                />
              </Td>
              <Td textAlign="center" px="0">
                <IconButton
                  aria-label="Enviar arquivo"
                  icon={<BiVial />}
                  colorScheme="black"
                  fontSize="1.2rem"
                  isRound
                />
              </Td>
              <Td textAlign="center" pl="2rem" pr="1rem">
                <IconButton
                  aria-label="Enviar arquivo"
                  icon={<AiOutlinePaperClip />}
                  colorScheme="primary"
                  fontSize="1.2rem"
                  isRound
                />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
