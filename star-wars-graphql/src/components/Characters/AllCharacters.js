import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Character from './Character';

class AllCharacters extends React.Component {
  state = {
    characters: []
  }
  constructor() {
    super()
    this.getCharacters()
  }
  getCharacters = () => {
    fetch('http://localhost:60964', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: "{allPeople { people { id name homeworld {id name}}}}"})
    })
      .then(res => res.json())
      .then(data => this.setState({characters: data.data.allPeople.people}))
      // .then(data => console.log(data.data.allPeople.people))
  }

  render() {
    return (
      <div>
          { this.state.characters ? (
              <div>
                  <Grid container spacing={24} style={{padding: 24}}>
                      { this.state.characters.map(person => (
                          <Grid key={person.id} item xs={12} sm={6} lg={4} xl={3}>
                              <Character character={person} />
                          </Grid>
                      ))}
                  </Grid>
              </div>
          ) : "No characters found" }
      </div>
    );
  }
}

export default AllCharacters;

