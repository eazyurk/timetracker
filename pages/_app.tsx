import '../styles/globals.css';
import { ChakraProvider, Container } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import PageContainer from '../components/layout/PageContainer';
import Navbar from '../components/layout/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <PageContainer isFixedNav={true}>
        <Navbar />
        <Container maxW="container.lg" paddingTop="10px">
          <Component {...pageProps} />
        </Container>
      </PageContainer>
    </ChakraProvider>
  );
}

export default MyApp;
