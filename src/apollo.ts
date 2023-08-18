import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://example.com/graphql', // Substitua pelo URL do seu servidor GraphQL
  cache: new InMemoryCache(),
});

export default client;