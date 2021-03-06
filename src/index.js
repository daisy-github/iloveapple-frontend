import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

import "./index.css";
import RootContainer from "./RootContainer";
const client = new ApolloClient({
  link: new HttpLink({ uri: "https://e9e6bd0a.ngrok.io/graphql" }),
  cache: new InMemoryCache()
});

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <RootContainer />
  </ApolloProvider>
);

ReactDOM.render(<AppWithProvider />, document.getElementById("root"));
