import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavBar } from './components/Nav'
import AppRoutes from './components/AppRoutes'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <AppRoutes />
        </React.Fragment>
      </Router>
    );
  }
}

export default App
