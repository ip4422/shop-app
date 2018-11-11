import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import Curt from './components/Curt'
import LoginContainer from './containers/LoginContainer'
import SearchContainer from './containers/SearchContainer'
import PrivateRoute from './containers/PrivateRoute'
import NotFound from './components/NotFound'
import LogoutContainer from './containers/LogoutContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <header>
            <div className='container'>
              <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarToggler'>
                  <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/login'>Login</Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/signup'>Signup</Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/search'>Search</Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/logout'>Logout</Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/curt'>Curt</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LoginContainer} />
            <Route path='/signup' render={props => (
              <LoginContainer {...props} signup={true} />
            )} />
            <PrivateRoute path='/search' component={SearchContainer} />
            <PrivateRoute path='/curt' component={Curt} />
            <Route path='/logout' component={LogoutContainer} />
            <Route component={NotFound} />
          </Switch>

        </React.Fragment>
      </Router>
    );
  }
}

export default App
