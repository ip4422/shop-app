import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../actions/sessionActions'
import Logout from './Logout'
import { User } from '../../reducers/types'
import { Store } from '../../reducers/types'

interface LogOutPageProps {
  logOut: () => void
  user: User
}

const LogOutPage = ({ logOut, user }: LogOutPageProps): JSX.Element => {
  return <Logout logOut={logOut} user={user} />
}

const mapStateToProps = ({ sessionStore }: Store) => ({
  user: sessionStore.user,
})

const mapDispatchToProps = {
  logOut: () => logOut(),
}

const WrappedLogoutPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOutPage)
export { WrappedLogoutPage as LogOutPage }
