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
  uri: "https://api.annict.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    "content-type": "application/json",
    "Authorization": "Bearer v_PMeEEeXPV0lvnVctyLf3FTYkKkum5UfU6efgY9x24",
  },
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
