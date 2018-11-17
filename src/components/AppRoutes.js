import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SearchPage from '../pages/SearchPage'
import PrivateRoute from '../pages/PrivateRoute'
import LogoutPage from '../pages/LogoutPage'
import NotFound from './NotFound'
import Cart from './Cart'

export const ROOT_PATH='/'
export const LOGIN_PATH='/login'
export const SIGNUP_PATH='/signup'
export const SEARCH_PATH='/search'
export const CART_PATH='/cart'
export const LOGOUT_PATH='/logout'


class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={ROOT_PATH} render={() => <Redirect to={LOGIN_PATH} />} />
        <Route path={LOGIN_PATH} component={LoginPage} />
        <Route path={SIGNUP_PATH} render={props => (
          <LoginPage {...props} isSignup={true} />
        )} />
        <PrivateRoute path={SEARCH_PATH} component={SearchPage} />
        <PrivateRoute path={CART_PATH} component={Cart} />
        <Route path={LOGOUT_PATH} component={LogoutPage} />
        <Route component={NotFound} />
      </Switch>

    );
  }
}

export default AppRoutes;