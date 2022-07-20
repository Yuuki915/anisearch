import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// gql --->
// import {
//   ApolloClient,
//   ApolloProvider,
//   InMemoryCache,
//   HttpLink,
//   from,
// } from "@apollo/client";
// import { onError } from "@apollo/client/link/error";

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

// const cliet = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link,
// });
// <--- gql
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ApolloProvider client={cliet}> */}
    <App />
    {/* </ApolloProvider> */}
  </React.StrictMode>
);
