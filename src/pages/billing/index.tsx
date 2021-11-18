import { useState, useEffect } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Text, Flex, IconButton, HStack, Icon, Stack, Spinner } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { FaQuestion, FaSignature } from 'react-icons/fa';
import { AiOutlinePaperClip } from "react-icons/ai";
import { BiFile, BiSpreadsheet, BiBone, BiVial, BiTime } from "react-icons/bi";

import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";

export function Attach() {
  const [filter, setFilter] = useState({ month: new Date().toISOString().substring(0, 7), insurance: "13" , amb: true, ext: false, int: false});
  const [insurances, setInsurances] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleDateChange(month: string) {
    setFilter({ ...filter, month: month });
  }

  function handleTypeAmbChange() {
    setFilter({ ...filter, amb: !filter.amb });
  }

  function handleTypeExtChange() {
    setFilter({ ...filter, ext: !filter.ext });
  }

  function handleTypeIntChange() {
    setFilter({ ...filter, int: !filter.int });
  }

  function handleInsuranceChange(insurance: string) {
    setAppointments([]);
    setLoading(true);

    setFilter({ ...filter, insurance: insurance });
  }

  async function loadInsurances() {
    const healthInsurances = await fetch("http://localhost:3333/sigh/health_insurances")
      .then(response => response.json());
    setInsurances(healthInsurances);
  }

  async function loadAppointments() {
    const appointments = await fetch(`http://localhost:3333/sigh/appointments?insurance=${encodeURIComponent(filter.insurance)}&month=${encodeURIComponent(filter.month)}&amb=${encodeURIComponent(filter.amb)}&ext=${encodeURIComponent(filter.ext)}&int=${encodeURIComponent(filter.int)}`)
      .then(response => response.json());
    setAppointments(appointments);
    setLoading(false);
  }

  useEffect(() => {
    loadInsurances();
  }, []);

  useEffect(() => {
    loadAppointments();
  }, [filter]);

  return (
    <Box
      as="section"
      flex="1"
      borderRadius="18px"
      bg="gray.800"
      p="2rem"
    >
      <Flex mb="4rem" alignItems="center" justifyContent="space-between">
        <Heading size="lg" textTransform="uppercase">Anexar Documentos</Heading>
        <IconButton
          aria-label="Ajuda"
          icon={<FaQuestion />}
          colorScheme="transparent"
          fontSize="1.2rem"
          color="gray.600"
          isRound
        />
      </Flex>
      <Flex mb="2rem">
        <HStack spacing="2rem" bg="gray.800">
          <Input
            type="month"
            name="scope"
            label="Competência"
            value={filter.month}
            onChange={(e) => handleDateChange(e.target.value)}
          />
          <Checkbox colorScheme="primary" defaultIsChecked={filter.amb} onChange={(e) => handleTypeAmbChange()}>AMB</Checkbox>
          <Checkbox colorScheme="primary" defaultIsChecked={filter.ext} onChange={(e) => handleTypeExtChange()}>EXT</Checkbox>
          <Checkbox colorScheme="primary" defaultIsChecked={filter.int} onChange={(e) => handleTypeIntChange()}>INT</Checkbox>
          <Select name="health_insurance" label="Convênio" onChange={(e) => handleInsuranceChange(e.target.value)}>
            {insurances.map(insurance => (
              <option key={insurance.id} value={insurance.id} selected={insurance.id == filter.insurance ? true : false}>{insurance.name}</option>
            ))}
          </Select>
        </HStack>
      </Flex>
      { loading ? (
        <Flex justify="center" mt="5rem">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Table colorScheme="whiteAlpha">
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
            {appointments.map(appointment => (
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
                  <IconButton
                    aria-label="Enviar arquivo"
                    icon={<FaSignature />}
                    colorScheme="black"
                    fontSize="1.2rem"
                    isRound
                  />
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
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
}
