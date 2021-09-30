import React from 'react';
import './App.css';
import Home from './pages/Home'
import Prperties from './pages/Properties'
import SingleProperty from './pages/SingleProperty'
import Error from './pages/Error'
import Properties from './pages/Properties';

import { Route, Switch} from 'react-router-dom'

function App() {
  return <>
  <Switch>


  
  <Route exact path="/" component={Home}/>
  <Route exact path="/properties/" component={Properties}/>
  <Route exact path="/properties/:sp" component={SingleProperty}/>
  <Route component={Error} />
  </Switch>
  </>;
}

export default App;
