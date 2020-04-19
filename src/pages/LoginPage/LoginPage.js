import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { logIn } from '../../actions/sessionActions'
import Login from './Login'
import { isValidEmail, hashCode } from '../../helpers/service'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMsg: this.props.errorMsg,
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!isValidEmail(event.target.email.value)) {
      this.setState({
        errorMsg: 'email address is incorrect',
      })
      return null
    }
    // pass 'admin' cause we have no server part authorization
    this.props.logIn({
      email: event.target.email.value,
      password: hashCode(event.target.password.value),
      admin: this.props.admin,
    })
  }

  render() {
    return (
      <Login
        {...this.props}
        errorMsg={this.props.errorMsg || this.state.errorMsg}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

LoginPage.propTypes = {
  isAuthorized: PropTypes.bool,
  errorMsg: PropTypes.string,
  admin: PropTypes.object,
  logIn: PropTypes.func.isRequired,
}

const mapStateToProps = ({ sessionStore }) => ({
  isAuthorized: sessionStore.user.email !== '',
  errorMsg: sessionStore.errorMsg,
  user: sessionStore.user,
  admin: sessionStore.admin,
})

const mapDispatchToProps = {
  logIn: (params, callback) => logIn(params, callback),
}

const WrappedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage)
export { WrappedLoginPage as LoginPage }
