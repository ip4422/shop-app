import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {
  LoginPage,
  SignUpPage,
  SearchPage,
  PrivateRoute,
  LogOutPage,
} from '../pages'

import { NotFound, Cart } from '.'

export const ROOT_PATH = '/shop-app/'
export const LOGIN_PATH = '/shop-app/login'
export const SIGNUP_PATH = '/shop-app/signup'
export const SEARCH_PATH = '/shop-app/search'
export const CART_PATH = '/shop-app/cart'
export const LOGOUT_PATH = '/shop-app/logout'

export const AppRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route
        exact
        path={ROOT_PATH}
        render={() => <Redirect to={LOGIN_PATH} />}
      />
      <Route path={LOGIN_PATH} component={LoginPage} />
      <Route path={SIGNUP_PATH} component={SignUpPage} />
      <PrivateRoute path={SEARCH_PATH} component={SearchPage} />
      <PrivateRoute path={CART_PATH} component={Cart} />
      <Route path={LOGOUT_PATH} component={LogOutPage} />
      <Route component={NotFound} />
    </Switch>
  )
}
