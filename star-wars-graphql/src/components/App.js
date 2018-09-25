import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import './App.css';
import ApolloClient from "apollo-boost";
// import Ships from "./Starships/AllStarShips";
import Main from './Main'
import NavBar from "./AppBar";

const client = new ApolloClient({
  uri: "http://localhost:60964"
});

class AppTest extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div>
        <NavBar />
        <Main/>
      </div>
      </ApolloProvider>
    );
  }
}

export default AppTest;
