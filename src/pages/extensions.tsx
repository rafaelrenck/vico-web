
import { Heading, Text, VStack, HStack, Box } from '@chakra-ui/react';

import { MasonryGrid } from '../components/MasonryGrid';

export default function Extensions() {
  const extensions = [
    {
      section: "Assistência ao paciente",
      extensions: [
        { ramal: 4038, locate: "1º Andar" },
        { ramal: 4048, locate: "1º Andar: Retaguarda" },
        { ramal: 4029, locate: "3º Andar" },
        { ramal: 4068, locate: "Ambulatório: Convênios" },
        { ramal: 4043, locate: "Ambulatório: Covid-19" },
        { ramal: 4072, locate: "Ambulatório: Endoscopia" },
        { ramal: 4031, locate: "Ambulatório: Sala Amarela" },
        { ramal: 4053, locate: "Ambulatório: Sala Vermelha" },
        { ramal: 4017, locate: "Ambulatório: Tomografia" },
        { ramal: 4052, locate: "Ambulatório: Triagem SUS" },
        { ramal: 4067, locate: "Bloco Cirúrgico: Sala de Recuperação" },
        { ramal: 4025, locate: "Centro Obstétrico" },
        { ramal: 252,  locate: "Hemodiálise" },
        { ramal: 4059, locate: "Pediatria" },
        { ramal: 4036, locate: "Pediatria: Alojamento Conjunto" },
        { ramal: 4032, locate: "Psiquiatria" },
        { ramal: 4033, locate: "Psiquiatria: Consultório" },
        { ramal: 4041, locate: "UTI 1" },
        { ramal: 4042, locate: "UTI 1" },
        { ramal: 4061, locate: "UTI 2" },
      ],
    },
    {
      section: "Recepções",
      extensions: [
        { ramal: 4035, locate: "CDI/Raio-X" },
        { ramal: 4040, locate: "Convênios/Internação" },
        { ramal: 4020, locate: "Emergência" },
        { ramal: 4014, locate: "Policlínica" },
        { ramal: 4015, locate: "Portaria" },
        { ramal: 4050, locate: "UTI" },
      ],
    },
    {
      section: "Apoio",
      extensions: [
        { ramal: 4026, locate: "Almoxarifado" },
        { ramal: 4028, locate: "Banco de Sangue" },
        { ramal: 4010, locate: "CCIH" },
        { ramal: 4054, locate: "CME 1º Andar" },
        { ramal: 4051, locate: "CME 2º Andar" },
        { ramal: 4056, locate: "Copa 1º Andar" },
        { ramal: 4057, locate: "Copa 3º Andar" },
        { ramal: 4069, locate: "Costura e Lavanderia" },
        { ramal: 4011, locate: "Cozinha" },
        { ramal: 4024, locate: "Farmácia" },
        { ramal: 4066, locate: "Quarto dos médicos" },
        { ramal: 4058, locate: "Quarto dos obstetras" },
        { ramal: 4071, locate: "Quarto dos pediatras" },
        { ramal: 4047, locate: "Radiologia" },
      ],
    },
    {
      section: "Administrativo",
      extensions: [
        { ramal: 4037, locate: "Diretoria", persons: ["Dr. Marco Pereira"] },
        { ramal: 4045, locate: "Gerência Executiva", persons: ["Marcel"] },
        { ramal: 4022, locate: "Assistência Social/Ouvidoria", persons: ["Paula"] },
        { ramal: 4018, locate: "Autorizações de Convênios", persons: ["Celair", "Darcilene"] },
        { ramal: 4013, locate: "Compras" },
        { ramal: 4113, locate: "Compras", persons: ["Priscila"] },
        { ramal: 4213, locate: "Compras", persons: ["Bianca"] },
        { ramal: 4030, locate: "DTI/Informática", persons: ["Rafael"] },
        { ramal: 4027, locate: "Farmácia", persons: ["Michelle"] },
        { ramal: 4064, locate: "Faturamento" },
        { ramal: 4164, locate: "Faturamento SUS", persons: ["Odete"] },
        { ramal: 4264, locate: "Faturamento IPE", persons: ["Maria"] },
        { ramal: 4364, locate: "Faturamento Convênios", persons: ["Jussara"] },
        { ramal: 4016, locate: "Financeiro/Contabilidade", persons: ["Yasmin", "Emilin", "Sheron"] },
        { ramal: 4063, locate: "Gerência do CDI", persons: ["Aline"] },
        { ramal: 4023, locate: "Gerência da Enfermagem", persons: ["Catiuscia"] },
        { ramal: 4046, locate: "Gerência da Higienização", persons: ["Desiree"] },
        { ramal: 4049, locate: "Laudos", persons: ["Alessandra"] },
        { ramal: 4021, locate: "Nutricão", persons: ["Andressa", "Gabriela"] },
        { ramal: 4034, locate: "Planejamento/Licitações", persons: ["Renato"] },
        { ramal: 4019, locate: "RH/Departamento Pessoal", persons: ["Josete", "Juciane"] },
      ],
    },
  ]

  return (
    <>
      <Heading size="lg" textTransform="uppercase" mb="4rem">Ramais</Heading>
      <MasonryGrid columns={2}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>
          <Box>3</Box>
          <Box>3</Box>
          <Box>3</Box>
          <Box>3</Box>
          <Box>3</Box>
          <Box>3</Box>
          <Box>3</Box>
        </Box>
        <Box>4</Box>
        <Box column="2">5</Box>
      </MasonryGrid>
      {/*
      <VStack
        spacing="2rem"
        alignItems="stretch"
      >
        {extensions.map((extensionSection) => (
          <VStack key={extensionSection.section} alignItems="flex-start">
            <Text fontWeight="semibold" color="gray.400" fontSize="small" textTransform="uppercase">
              {extensionSection.section}
            </Text>
            {extensionSection.extensions.map((extension) => (
              <HStack key={extension.ramal}>
                <Text>
                  {extension.ramal}
                </Text>
              </HStack>
            ))}
          </VStack>
        ))}
      </VStack>
            */}
    </>
  );
}
