import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import { NavBar, AppRoutes } from './components'

const App = (): JSX.Element => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <AppRoutes />
      </React.Fragment>
    </Router>
  )
}

export default App
