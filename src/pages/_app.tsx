import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';

import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
