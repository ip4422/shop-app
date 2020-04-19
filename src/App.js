import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import { NavBar, AppRoutes } from './components'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <AppRoutes />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
