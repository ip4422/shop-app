import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { signUp } from '../../actions/sessionActions'
import SignUp from './SignUp'
import { isValidEmail, hashCode } from '../../helpers/service'

class SignUpPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMsg: this.props.errorMsg,
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { signUp } = this.props
    if (!isValidEmail(event.target.email.value)) {
      this.setState(prev => ({
        ...prev,
        errorMsg: 'email address incorrect',
      }))
      return null
    }
    if (event.target.password.value !== event.target.confirmPassword.value) {
      this.setState(prev => ({
        ...prev,
        errorMsg: "password didn't match",
      }))
      return null
    }
    signUp({
      email: event.target.email.value,
      password: hashCode(event.target.password.value),
    })
  }

  render() {
    return (
      <SignUp
        {...this.props}
        errorMsg={this.props.errorMsg || this.state.errorMsg}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

SignUpPage.propTypes = {
  isAuthorized: PropTypes.bool,
  errorMsg: PropTypes.string,
  user: PropTypes.object,
  admin: PropTypes.object,
  signUp: PropTypes.func.isRequired,
}

const mapStateToProps = ({ sessionStore }) => ({
  isAuthorized: sessionStore.user.email !== '',
  errorMsg: sessionStore.errorMsg,
  user: sessionStore.user,
  admin: sessionStore.admin,
})

const mapDispatchToProps = {
  signUp: (params, callback) => signUp(params, callback),
}

const WrappedSignUpPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage)
export { WrappedSignUpPage as SignUpPage }
