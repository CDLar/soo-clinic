import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Special from './components/Special'
import Services from './components/Services'
import Landing from './components/Landing'
import Gallery from './components/Gallery'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/services' component={Services}/>
        <Route path='/special' component={Special}/>
        <Route path='/gallery' component={Gallery}/>
      </Switch>

    </Router>
  )
}

export default App;
