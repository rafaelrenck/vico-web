import { useState, useEffect } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Text, Flex, IconButton, HStack } from '@chakra-ui/react';
import { FaQuestion } from 'react-icons/fa';

import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";

export function Attach() {
  const [scope, setScope] = useState(new Date().toISOString().substring(0, 7));
  const [insurances, setInsurances] = useState([]);

  function handleScopeChange(date: string) {
    setScope(date);
  }

  useEffect(() => {
    async function loadInsurances() {
      const healthInsurances = await fetch("http://localhost:3333/sigh/health_insurances")
        .then(response => response.json());
      setInsurances(healthInsurances);
    }
    loadInsurances();
  }, []);

  return (
    <Box
      as="main"
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
            value={scope}
            onChange={(e) => handleScopeChange(e.target.value)}
          />
          <Select name="health_insurance" label="Convênio">
            {insurances.map(insurance => (
              <option key={insurance.id} value={insurance.id}>{insurance.name}</option>
            ))}
          </Select>
        </HStack>
      </Flex>
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th px="1.5rem" color="gray.300" width="2rem">
              <Checkbox colorScheme="primary" />
            </Th>
            <Th>Paciente</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td px="1.5rem">
              <Checkbox colorScheme="primary" />
            </Td>
            <Td>
              <Box>
                <Text fontWeight="bold">João da Silva</Text>
                <Text></Text>
              </Box>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
