import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// gql --->
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { DataProvider } from "./context/EachDataContext";

const client = new ApolloClient({
  uri: "https://api.annict.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer v_PMeEEeXPV0lvnVctyLf3FTYkKkum5UfU6efgY9x24",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <DataProvider>
        <App />
      </DataProvider>
    </ApolloProvider>
  </React.StrictMode>
);
