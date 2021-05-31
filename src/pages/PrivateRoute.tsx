import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { Store } from '../reducers/types'
import { LOGIN_PATH, SEARCH_PATH } from '../components/AppRoutes'

const mapStateToProps = ({ sessionStore }: Store) => {
  return {
    isAuthorized: sessionStore.user.email !== '',
  }
}

const connector = connect(mapStateToProps, {})

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & RouteProps & unknown

const PrivateRoute: React.FC<Props> = props => {
  const { isAuthorized, ...rest } = props

  return !isAuthorized ? (
    <Redirect
      to={{
        pathname: LOGIN_PATH,
        state: { from: SEARCH_PATH },
      }}
    />
  ) : (
    <Route {...rest} />
  )
}

export default connector(PrivateRoute)
