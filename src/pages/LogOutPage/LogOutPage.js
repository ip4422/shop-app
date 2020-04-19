import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logOut } from '../../actions/sessionActions'
import Logout from './Logout'

class LogOutPage extends React.Component {
  render() {
    const { logOut, user } = this.props
    return <Logout logOut={logOut} user={user} />
  }
}

LogOutPage.propTypes = {
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
}

const mapStateToProps = ({ sessionStore }) => ({
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
