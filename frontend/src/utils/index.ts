import { ApolloClient, InMemoryCache, from, createHttpLink, ApolloLink } from '@apollo/client';
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename';
// import { onError } from '@apollo/client/link/error';
const httpLink = createHttpLink({
    uri: 'http://localhost:8080/graphql',
});
const removeTypenameLink = removeTypenameFromVariables();

/*
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );

            // Check if the error code is "BAD_USER_INPUT"
            if (extensions && extensions.code === 'BAD_USER_INPUT') {
                // Handle or ignore the "BAD_USER_INPUT" error here
                console.log('Handling BAD_USER_INPUT error');
                return null;
            }
        });
    }

    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});*/


const link = ApolloLink.from([removeTypenameLink, httpLink]);


export const client = new ApolloClient({
    link: link,
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),

});



export default { client };