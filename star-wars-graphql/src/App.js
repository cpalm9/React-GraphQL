import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import './App.css';
import ApolloClient from "apollo-boost";
import Ships from "./AllStarShips";
import SimpleAppBar from "./AppBar";

const client = new ApolloClient({
  uri: "http://localhost:62695"
});

class AppTest extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <SimpleAppBar/>
      <Ships/>
      </ApolloProvider>
    );
  }
}

export default AppTest;
