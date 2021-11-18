import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Body } from '../components/Body';
import { Sidebar } from '../components/Sidebar';
import { Attach } from './billing';
import { Footer } from '../components/Footer';


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
      <Body>
        <Sidebar />
        <Attach />
      </Body>
      <Footer>
        &copy; 2021 - Hospital São Vicente de Paulo
      </Footer>
    </Flex>
  );
}
