import React, { Component } from 'react'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'

class Login extends Component {
  constructor(props) {
    super(props)
    const { signup } = this.props
    this.state = {
      redirectBack: false,
      email: '',
      pasword: '',
      confirmPassword: '',
      errorInput: '',
      isSignup: signup,
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.signup !== prevProps.signup) {
      this.setState(prev =>({
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
        errorInput: 'password didn\'t match',
      }))
      return null
    }
    this.props.logIn(
      {
        email,
        //TODO: convert password to hash
        password,
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

  getAlert() {
    if (this.state.errorInput) {
      return (
        <div className='alert alert-danger' role='alert'>
          {this.state.errorInput}
        </div>
      )
    }
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
          id='InputConfirmPassword'
          placeholder='Confirm Password' />
      </div>
    )
  }

  render() {
    const { location } = this.props
    const { from } = location.state || { from: { pathname: '/' } }
    const { redirectBack, isSignup } = this.state

    if (redirectBack) {
      return <Redirect to={from} />
    }

    return (
      <div className='container'>
        {this.getAlert()}
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='InputEmail'>Email address</label>
            <input
              type='email'
              data-field-name={'email'}
              onChange={this.handleChange}
              className='form-control'
              id='InputEmail'
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
              id='InputPassword'
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
  //TODO: FIX this problem Failed prop type: Login: prop type `logIn` is invalid; it must be a function, usually from the `prop-types` package, but received `undefined`.
  // logIn: PropTypes.func.isRequiered,
  errorMsg: PropTypes.string,
}

export default Login