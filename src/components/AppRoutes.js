import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/LoginContainer'
import SearchPage from '../pages/SearchContainer'
import PrivateRoute from '../pages/PrivateRoute'
import LogoutPage from '../pages/LogoutContainer'
import NotFound from './NotFound'
import Home from './Home'
import Cart from './Cart'


class AppRoutes extends Component {
  render() {
    return (
      < Switch >
        {/* //TODO: сделать стартовой страницей SignUp*/}
        <Route exact path='/' component={Home} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' render={props => (
          <LoginPage {...props} signup={true} />
        )} />
        <PrivateRoute path='/search' component={SearchPage} />
        <PrivateRoute path='/cart' component={Cart} />
        <Route path='/logout' component={LogoutPage} />
        <Route component={NotFound} />
      </Switch >

    );
  }
}

export default AppRoutes;