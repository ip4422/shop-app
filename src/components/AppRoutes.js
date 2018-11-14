import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SearchPage from '../pages/SearchPage'
import PrivateRoute from '../pages/PrivateRoute'
import LogoutPage from '../pages/LogoutPage'
import NotFound from './NotFound'
import Cart from './Cart'


class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/login' />} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' render={props => (
          <LoginPage {...props} isSignup={true} />
        )} />
        <PrivateRoute path='/search' component={SearchPage} />
        <PrivateRoute path='/cart' component={Cart} />
        <Route path='/logout' component={LogoutPage} />
        <Route component={NotFound} />
      </Switch>

    );
  }
}

export default AppRoutes;