import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

import { SEARCH_PATH } from '../../components/AppRoutes'
import { EmailField, PasswordField } from '../../components'

class SignUp extends React.Component {
  render() {
    const { location, onSubmit, errorMsg, isAuthorized } = this.props
    const { from } = location.state || { from: { pathname: SEARCH_PATH } }

    if (isAuthorized) {
      return <Redirect to={from} />
    }

    return (
      <div className='container'>
        {errorMsg ? (
          <div className='alert alert-danger' role='alert'>
            {errorMsg}
          </div>
        ) : null}
        <form onSubmit={onSubmit}>
          <EmailField />
          <PasswordField caption={'Password'} name={'password'} />
          <PasswordField
            caption={'Confirm Password'}
            name={'confirmPassword'}
          />
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

SignUp.propTypes = {
  errorMsg: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  location: PropTypes.object,
  isAuthorized: PropTypes.bool,
}

export default SignUp
