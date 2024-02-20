import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';

import { MESSAGE } from '@/constants';
import { getItemLocalStore } from '@/utils/localstorage';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { toast } from 'react-hot-toast';

const NEXT_PUBLIC_GRAPHQL_HOST = process.env.NEXT_PUBLIC_GRAPHQL_HOST;
const GRAPHQL_EXTENSION_ERR_CODE = [408, 503];
const withToken = setContext(async () => {
  const token = await getItemLocalStore('apiToken');
  return { headers: { Authorization: `Bearer ${token}` } };
});
const httpLink = new HttpLink({
  uri: NEXT_PUBLIC_GRAPHQL_HOST,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      if (GRAPHQL_EXTENSION_ERR_CODE.includes(extensions.code as number)) {
        toast.error(MESSAGE.NETWORK_ERR);
      }

      // eslint-disable-next-line no-console
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }

  if (networkError)
    toast.error(networkError.message);
  // eslint-disable-next-line no-console
  console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
  link: from([withToken, errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'none',
    },
  },
});
