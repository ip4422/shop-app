import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//TODO: после успешного логина или регистрации отправлять на страницу поиска
const PrivateRoute = ({ component: Component, ...rest }) => {
  return(
    <Route
      {...rest}
      render={props =>
        rest.isAuthorized ?
          (<Component {...props} />)
          :
          (<Redirect
            to={{
              pathname: '/login',
              state: { from: '/search' },
              // state: { from: props.location },
            }}
          />
          )}
    />
  )
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.session.user.email !== '',
  }
}

export default connect(mapStateToProps)(PrivateRoute)