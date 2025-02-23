import React, { useState, useRef } from "react";
import {
  Heading,
  Checkbox,
  Flex,
  IconButton,
  HStack,
  Stack,
  Spinner,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { BiEraser } from "react-icons/bi";

import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";
import { Pagination } from "../../components/Pagination";
import TableAppointments from "../../components/Attach/TableAppointments";
import { useHealthInsurances } from "../../services/hooks/useHealthInsurances";
import { useAppointments } from "../../services/hooks/useAppointments";
import { RestrictedPage } from "../../components/RestrictedPage";

export default function Attach() {
  const { isOpen, onClose } = useDisclosure();
  const invoice = useRef<HTMLInputElement>(null);
  const patient = useRef<HTMLInputElement>(null);
  const [filter, setFilter] = useState(() => ({
    month: new Date().toISOString().substring(0, 7),
    insurance: "29",
    amb: true,
    ext: false,
    int: false,
    invoice: "",
    patient: "",
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const healthInsurances = useHealthInsurances();
  const appointments = useAppointments(currentPage, filter);

  function handleMonthChange(month: string) {
    invoice.current.value = "";
    setCurrentPage(1);
    setFilter({ ...filter, month: month, invoice: "" });
  }

  function handleTypeAmbChange() {
    setCurrentPage(1);
    setFilter({ ...filter, amb: !filter.amb });
  }

  function handleTypeExtChange() {
    setCurrentPage(1);
    setFilter({ ...filter, ext: !filter.ext });
  }

  function handleTypeIntChange() {
    setCurrentPage(1);
    setFilter({ ...filter, int: !filter.int });
  }

  function handleInsuranceChange(insurance: string) {
    invoice.current.value = "";
    setCurrentPage(1);
    setFilter(() => ({ ...filter, insurance: insurance, invoice: "" }));
  }

  function handleInvoiceUpdate(event) {
    if (event.key === "Enter") {
      patient.current.value = "";
      setCurrentPage(1);
      setFilter({
        ...filter,
        invoice: event.target.value,
        amb: true,
        ext: true,
        int: true,
        patient: "",
      });
    }
  }

  function handlePatientUpdate(event) {
    if (event.key === "Enter") {
      invoice.current.value = "";
      setCurrentPage(1);
      setFilter({ ...filter, patient: event.target.value, invoice: "" });
    }
  }

  function handleCleanFilter() {
    invoice.current.value = "";
    patient.current.value = "";
    setCurrentPage(1);
    setFilter({ ...filter, invoice: "", patient: "" });
  }

  return (
    <RestrictedPage group="Faturamento">
      <Heading size="lg" textTransform="uppercase" mb="4rem">
        Anexar Documentos
        {!healthInsurances.isLoading && healthInsurances.isFetching && (
          <Spinner size="sm" ml="2rem" />
        )}
      </Heading>
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
          <Checkbox
            colorScheme="primary"
            isChecked={filter.amb}
            onChange={() => handleTypeAmbChange()}
          >
            AMB
          </Checkbox>
          <Checkbox
            colorScheme="primary"
            isChecked={filter.ext}
            onChange={() => handleTypeExtChange()}
          >
            EXT
          </Checkbox>
          <Checkbox
            colorScheme="primary"
            isChecked={filter.int}
            onChange={() => handleTypeIntChange()}
          >
            INT
          </Checkbox>
          <Select
            name="health_insurance"
            label="Convênio"
            onChange={(e) => handleInsuranceChange(e.target.value)}
            value={filter.insurance}
          >
            {healthInsurances.isLoading ? (
              <option value={0}>Carregando...</option>
            ) : (
              <>
                {healthInsurances.data.map((insurance) => (
                  <option key={insurance.id} value={insurance.id}>
                    {insurance.health_insurance}
                  </option>
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
      {appointments.isLoading ? (
        <Flex justify="center" mt="5rem">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <>
          <TableAppointments appointments={appointments.data.appointments} />
          <Modal
            isCentered
            motionPreset="slideInBottom"
            isOpen={isOpen}
            onClose={onClose}
            size="xl"
          >
            <ModalOverlay />
            <ModalContent bg="gray.800">
              <ModalHeader>Anexar documento</ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>
            </ModalContent>
          </Modal>
          <Pagination
            totalCountOfRegisters={appointments.data.totalCount}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </RestrictedPage>
  );
}
