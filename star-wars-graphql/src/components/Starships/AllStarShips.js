import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Ship from "./Ship";

class AllStarShips extends Component {
  state = {
    starships: []
  }

  constructor() {
    super()
    this.getStarShips()
  }
  getStarShips = () => {
    fetch('http://localhost:60964', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: "{allStarships {starships {id name starshipClass passengers} } }"})
    })
      .then(res => res.json())
      .then(data => this.setState({starships: data.data['allStarships'].starships}))
  }
  render() {
    return(
      <div>
          { this.state.starships ? (
              <div>
                  <Grid container spacing={24} style={{padding: 24}}>
                      { this.state.starships.map(currentShip => (
                          <Grid key={currentShip.id} item xs={12} sm={6} lg={4} xl={3}>
                              <Ship ship={currentShip} />
                          </Grid>
                      ))}
                  </Grid>
              </div>
          ) : "No starships found" }
      </div>
    )
  }
}

export default AllStarShips;