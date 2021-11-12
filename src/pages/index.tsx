import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Attach } from './billing';


export default function Home() {
  return (
    <Flex
      w="100vw"
      minHeight="100vh"
      direction="column"
      align="center"
      justify="space-between"
    >
      <Header />

      <Flex
        flex="1"
        as="main"
        w="100%"
        maxW="1480px"
        mx="auto"
        px="2rem"
        my="2rem"
      >
        <Sidebar />

        <Attach />
      </Flex>

      <Flex as="footer" w="100%">
        &copy; 2021 - Hospital São Vicente de Paulo
      </Flex>
    </Flex>
  );
}
