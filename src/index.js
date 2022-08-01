import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// gql --->
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from,
  gql,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const client = new ApolloClient({
  uri: "https://factual-chimp-44.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      "LQMOHI2CncCGaa8iqQBPndI5RWGL8QA36Qhb4NRCM3mn43sZUMq6AjpplbpwKt8F",
  },
});
// https://graphql.org/swapi-graphql
// https://factual-chimp-44.hasura.app/v1/graphql
// query getTodos {
//   todos {
//     done
//     id
//     text
//   }
// }
// query allFilms {
//   films {
//     title
//     director
//     id
//   }
// }
client
  .query({
    query: gql`
      query getTodos {
        todos {
          done
          id
          text
        }
      }
    `,
  })
  .then((data) => console.log(data));

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`GraphQL error ${message}`);
//     });
//   }
// });

// const link = from([
//   errorLink,
//   new HttpLink({ uri: "https://api.annict.com/graphql" }),
// ]);
// // 使いたいapi
// // https://api.annict.com/graphql
// // http://localhost:8800/graphql

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link,
// });
// // <--- gql

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
