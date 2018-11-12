import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import LoginContainer from './pages/LoginContainer'
import SearchContainer from './pages/SearchContainer'
import PrivateRoute from './pages/PrivateRoute'
import NotFound from './components/NotFound'
import LogoutContainer from './pages/LogoutContainer'


class App extends Component {
  //TODO: все лишнее отрезать
  //TODO: вес из хедера в компонент NavBar вынести. В нем вынести компонент NavBarItem
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
                      <Link className='nav-link' to='/cart'>Cart</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
          <Switch>
            {/* //TODO: сделать стартовой страницей SignUp*/}
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LoginContainer} />
            <Route path='/signup' render={props => (
              <LoginContainer {...props} signup={true} />
            )} />
            <PrivateRoute path='/search' component={SearchContainer} />
            <PrivateRoute path='/cart' component={Cart} />
            <Route path='/logout' component={LogoutContainer} />
            <Route component={NotFound} />
          </Switch>

        </React.Fragment>
      </Router>
    );
  }
  //TODO: все внутри свитча вынести в файл AppRoutes
}

export default App
