import React, { Component } from 'react'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'

import { EmailField, PasswordField } from '../../components'
import { SEARCH_PATH } from '../../components/AppRoutes'

class Login extends Component {
  render() {
    const { location, onSubmit, errorMsg, isAuthorized } = this.props
    const { from } = location.state || { from: { pathname: SEARCH_PATH } }

    return (
      <React.Fragment>
        {isAuthorized ? (
          <Redirect to={from} />
        ) : (
          <div>
            <div className='container'>
              {errorMsg ? (
                <div className='alert alert-danger' role='alert'>
                  {errorMsg}
                </div>
              ) : null}
              <form onSubmit={onSubmit}>
                <EmailField />
                <PasswordField caption={'Password'} name={'password'} />
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

Login.propTypes = {
  errorMsg: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  location: PropTypes.object,
  isAuthorized: PropTypes.bool,
}

export default Login
