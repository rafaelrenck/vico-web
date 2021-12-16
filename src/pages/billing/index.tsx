import React, { useState, useEffect, useRef } from 'react';
import { Heading, Checkbox, Flex, IconButton, HStack, Stack, Spinner, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { BiEraser } from "react-icons/bi";

import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";
import { Pagination } from "../../components/Pagination";
import TableAppointments from '../../components/Attach/TableAppointments';

export default function Attach() {
  const healthInsurances = useQuery("healthInsurances", async () => {
    const response = await fetch("http://localhost:3333/sigh/health_insurances");
    const healthInsurances = await response.json();
    return healthInsurances;
  });

  console.log(healthInsurances);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(() => true);
  const invoice = useRef<HTMLInputElement>(null);
  const patient = useRef<HTMLInputElement>(null);
  const [filter, setFilter] = useState(() => ({
    month: new Date().toISOString().substring(0, 7),
    insurance: "13",
    amb: true,
    ext: false,
    int: false,
    invoice: "",
    patient: "",
  }));
  const [appointments, setAppointments] = useState(() => []);

  function handleMonthChange(month: string) {
    invoice.current.value = "";
    setFilter({ ...filter, month: month, invoice: "" });
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
    invoice.current.value = "";
    setFilter({ ...filter, insurance: insurance, invoice: "" });
  }

  function handleInvoiceUpdate(event) {
    if (event.key === 'Enter') {
      patient.current.value = "";
      setFilter({ ...filter, invoice: event.target.value, amb: true, ext: true, int: true, patient: "" });
    }
  }

  function handlePatientUpdate(event) {
    if (event.key === 'Enter') {
      invoice.current.value = "";
      setFilter({ ...filter, patient: event.target.value, invoice: "" });
    }
  }

  function handleCleanFilter() {
    invoice.current.value = "";
    patient.current.value = "";
    setFilter({ ...filter, invoice: "", patient: "" });
  }

  useEffect(() => {
    async function loadAppointments() {
      const appointments = await fetch(`http://localhost:3333/sigh/appointments?insurance=${encodeURIComponent(filter.insurance)}&month=${encodeURIComponent(filter.month)}&amb=${encodeURIComponent(filter.amb)}&ext=${encodeURIComponent(filter.ext)}&int=${encodeURIComponent(filter.int)}&invoice=${encodeURIComponent(filter.invoice)}&patient=${encodeURIComponent(filter.patient)}`)
        .then(response => response.json());
      setAppointments(appointments);
      setLoading(false);
    }
    loadAppointments();

    return () => {
      setAppointments([]);
      setLoading(true);
    };
  }, [filter]);

  return (
    <>
      <Heading size="lg" textTransform="uppercase" mb="4rem">Anexar Documentos</Heading>
      <Stack as="form" mb="2rem" flexDirection="column" spacing="2rem">
        <HStack w="full" spacing="2rem" bg="gray.800">
          <Input
            type="month"
            name="scope"
            label="Competência"
            value={filter.month}
            onChange={(e) => handleMonthChange(e.target.value)}
            fixedLabel
            w="16rem"
          />
          <Checkbox colorScheme="primary" isChecked={filter.amb} onChange={(e) => handleTypeAmbChange()}>AMB</Checkbox>
          <Checkbox colorScheme="primary" isChecked={filter.ext} onChange={(e) => handleTypeExtChange()}>EXT</Checkbox>
          <Checkbox colorScheme="primary" isChecked={filter.int} onChange={(e) => handleTypeIntChange()}>INT</Checkbox>
          <Select name="health_insurance" label="Convênio" onChange={(e) => handleInsuranceChange(e.target.value)}>
            {healthInsurances.isLoading ? (
              <option value={0} selected>Carregando...</option>
            ) : (
              <>
                {healthInsurances.data.map(insurance => (
                  <option key={insurance.id} value={insurance.id} selected={insurance.id == filter.insurance ? true : false}>{insurance.name}</option>
                ))}
              </>
            )}
          </Select>
        </HStack>
        <HStack w="full" spacing="2rem" bg="gray.800">
          <Input
            type="number"
            name="invoice"
            label="Remessa"
            ref={invoice}
            onKeyDown={handleInvoiceUpdate}
            fixedLabel
            w="16rem"
          />
          <Input
            type="text"
            name="patient"
            label="Paciente"
            ref={patient}
            onKeyDown={handlePatientUpdate}
            fixedLabel
            w="100%"
          />
          <IconButton
            aria-label="Limpar formulário"
            icon={<BiEraser />}
            colorScheme="dark"
            fontSize="1.2rem"
            onClick={() => handleCleanFilter()}
            isRound
          />
        </HStack>
      </Stack>
      {loading ? (
        <Flex justify="center" mt="5rem">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <>
          <TableAppointments appointments={appointments} />
          <Modal isCentered motionPreset='slideInBottom' isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent
              bg="gray.800"
            >
              <ModalHeader>Anexar documento</ModalHeader>
              <ModalCloseButton />
              <ModalBody>

              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
      <Pagination />
    </>
  );
}
