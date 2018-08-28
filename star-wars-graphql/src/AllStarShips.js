import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Ship from "./Ship";

const Ships = () => (
  <Query
    query={gql`
      {
        allStarships {
          starships {
            id
            name
            starshipClass
            passengers
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.allStarships.starships.map((currentShip ) => (
        <Ship ship={currentShip}></Ship>
      ));
    }}
  </Query>
);

export default Ships;