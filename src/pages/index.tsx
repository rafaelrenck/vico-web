import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';


export default function Home() {
  return (
    <Flex
      w="100vw"
      minHeight="100vh"
      direction="column"
      align="center"
      justify="space-between"
    >
      <Header/>

      <Flex
        flex="1"
        as="main"
        w="100%"
        maxW="1480px"
        mx="auto"
        px="2rem"
        mt="2rem"
      >
        <Sidebar/>
      </Flex>

      <Flex as="footer" w="100%">
        &copy; 2021 - Hospital São Vicente de Paulo
      </Flex>
    </Flex>
  );
}
