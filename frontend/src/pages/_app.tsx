import { client } from "@/api/graphql/apollo-client";
import Layout from "@/components/layouts";
import theme from "@/styles/theme";
import { ApolloProvider } from "@apollo/client";
import { ChakraBaseProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ChakraBaseProvider>
  );
}
