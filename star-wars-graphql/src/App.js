import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import './App.css';
import ApolloClient from "apollo-boost";
import Ships from "./components/Starships/AllStarShips";
import NavBar from "./components/AppBar";

const client = new ApolloClient({
  uri: "http://localhost:60032"
});

class AppTest extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div>
        <NavBar />
        <Ships/>
      </div>
      </ApolloProvider>
    );
  }
}

export default AppTest;
