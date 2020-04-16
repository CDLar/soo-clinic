import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Special from './components/Special'
import Services from './components/Services'
import Landing from './components/Landing'
import Map from './components/Map'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Nav />

        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/intro' component={Intro} />
          <Route path='/services' component={Services} />
          <Route path='/special' component={Special} />
          <Route path='/map' component={Map} />
          <Route path='/gallery' component={Gallery} />
        </Switch>

        <Footer />
    </Router>
  )
}

export default App;
