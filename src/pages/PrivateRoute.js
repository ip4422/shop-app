import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LOGIN_PATH, SEARCH_PATH } from '../components/AppRoutes'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: LOGIN_PATH,
              state: { from: SEARCH_PATH },
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = ({ sessionStore }) => {
  return {
    isAuthorized: sessionStore.user.email !== '',
  }
}

export default connect(mapStateToProps)(PrivateRoute)
