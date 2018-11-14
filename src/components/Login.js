import React, { Component } from 'react'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'
import { isValidEmail, hashCode } from '../helpers/service'

class Login extends Component {
  constructor(props) {
    super(props)
    const { signup, user, admin, errorMsg } = this.props
    this.state = {
      redirectBack: Boolean(user.email),
      email: '',
      pasword: '',
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
    this.props.logIn(
      {
        email,
        password: hashCode(password),
        admin: this.state.admin,
      },
      () => {
        this.setState({ redirectBack: true })
      }
    )
  }

  handleChange = event => {
    const value = event.currentTarget.value
    const fieldName = event.currentTarget.dataset.fieldName
    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
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

  getConfirmPassword() {
    return (
      <div className='form-group'>
        <label htmlFor='InputConfirmPassword'>Confirm Password</label>
        <input
          type='password'
          data-field-name={'confirmPassword'}
          onChange={this.handleChange}
          className='form-control'
          name='InputConfirmPassword'
          placeholder='Confirm Password' />
      </div>
    )
  }

  render() {
    const { errorMsg } = this.props || this.state.errorMsg
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
          <div className='form-group'>
            <label htmlFor='InputEmail'>Email address</label>
            <input
              type='email'
              data-field-name={'email'}
              onChange={this.handleChange}
              className='form-control'
              name='InputEmail'
              aria-describedby='emailHelp'
              placeholder='Enter email' />
          </div>
          <div className='form-group'>
            <label htmlFor='InputPassword'>Password</label>
            <input
              type='password'
              data-field-name={'password'}
              onChange={this.handleChange}
              className='form-control'
              name='InputPassword'
              placeholder='Password' />
          </div>
          {isSignup ? this.getConfirmPassword() : ''}
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