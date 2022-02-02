import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql", // http://localhost:4000/graphql
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
      // query {
      //   characters(page: 2, filter: { name: "rick" }) {
      //     results {
      //       name
      //     }
      //   }
      // }
//     `,
//   })
//   .then((result) => console.log(result));
