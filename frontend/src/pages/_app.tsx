import React from 'react';
import theme from '@/styles/theme';
import { ApolloProvider } from '@apollo/client';
import { ChakraBaseProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { client } from '../utils';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ChakraBaseProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraBaseProvider>
    </ApolloProvider>
  );
};

export default App;
