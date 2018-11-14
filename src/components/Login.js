import React, { Component } from 'react'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'
import { isValidEmail, hashCode } from '../helpers/service'
import EmailField from './EmailField'
import PasswordField from './PasswordField'

class Login extends Component {
  constructor(props) {
    super(props)
    const { isSignup, admin, errorMsg, isAuthorized } = this.props
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errorMsg,
      isSignup,
      admin,
      redirectBack: isAuthorized,
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, password, confirmPassword } = this.state
    const { isSignup, logIn, signUp } = this.props
    if (isSignup && password !== confirmPassword) {
      this.setState(prev => ({
        ...prev,
        errorMsg: 'password didn\'t match',
      }))
      return null
    }
    if (!isValidEmail(email)) {
      this.setState(prev => ({
        ...prev,
        errorMsg: 'email address incorrect',
      }))
      return null
    }
    if (isSignup) {
      signUp(
        {
          email,
          password: hashCode(password),
        },
        () => {
          this.setState({ redirectBack: true })
        })
    } else {
      // pass 'admin' cause we have no server part authorization
      logIn(
        {
          email,
          password: hashCode(password),
          admin: this.state.admin,
        },
        () => {
          this.setState({ redirectBack: true })
        })
    }
  }

  handleChange = event => {
    const value = event.currentTarget.value
    const name = event.currentTarget.name
    this.setState(prev => ({
      ...prev,
      [name]: value,
    })
    )
  }

  getAlert(errorMsg) {
    return (
      <div className='alert alert-danger' role='alert'>
        {errorMsg}
      </div>
    )
  }

  render() {
    const errorMsg = this.props.errorMsg || this.state.errorMsg
    const { location, isSignup } = this.props
    const { from } = location.state || { from: { pathname: '/search' } }
    const { redirectBack } = this.state

    if (redirectBack) {
      return <Redirect to={from} />
    }

    return (
      <div className='container'>
        {errorMsg && this.getAlert(errorMsg)}
        <form onSubmit={this.handleSubmit}>
          <EmailField onChange={this.handleChange} />
          <PasswordField onChange={this.handleChange} caption={'Password'} name={'password'} />
          {isSignup
            ?
            <PasswordField onChange={this.handleChange} caption={'Confirm Password'} name={'confirmPassword'} />
            : ''}
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  errorMsg: PropTypes.string,
}

export default Login