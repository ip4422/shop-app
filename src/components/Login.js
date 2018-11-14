import React, { Component } from 'react'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'
import { isValidEmail, hashCode } from '../helpers/service'
import EmailField from './EmailField'
import PasswordField from './PasswordField'

class Login extends Component {
  constructor(props) {
    super(props)
    const { signup, user, admin, errorMsg } = this.props
    this.state = {
      redirectBack: Boolean(user.email),
      email: '',
      password: '',
      confirmPassword: '',
      errorMsg,
      isSignup: signup,
      admin,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.signup !== prevProps.signup) {
      this.setState(prev => ({
        ...prev,
        isSignup: this.props.signup,
      }));
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, password, confirmPassword, isSignup } = this.state
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
    // pass 'admin' cause we have no server part authorization
    this.props.logIn(
      {
        email,
        password: hashCode(password),
        admin: this.state.admin,
      },
      () => { this.setState({ redirectBack: true }) } )
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
    const { location } = this.props
    const { from } = location.state || { from: { pathname: '/search' } }
    const { redirectBack, isSignup } = this.state

    if (redirectBack) {
      return <Redirect to={from} />
    }

    return (
      <div className='container'>
        {errorMsg && this.getAlert(errorMsg)}
        <form onSubmit={this.handleSubmit}>
          <EmailField onChange={this.handleChange}/>
          <PasswordField onChange={this.handleChange} caption={'Password'} name={'password'}/>
          {isSignup ? <PasswordField onChange={this.handleChange} caption={'Confirm Password'} name={'confirmPassword'}/> : ''}
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