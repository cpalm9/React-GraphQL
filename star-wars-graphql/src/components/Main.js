import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllStarShips from './Starships/AllStarShips'
import AllCharacters from './Characters/AllCharacters'
import Home from './Home'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/starships' component={AllStarShips}/>
      <Route path='/characters' component={AllCharacters}/>
    </Switch>
  </main>
)

export default Main