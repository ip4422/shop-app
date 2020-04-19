import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import { LOGIN_PATH } from '../../components/AppRoutes'

const Logout = ({ logOut, user }) => {
  return (
    <React.Fragment>
      {user.email ? (
        <div className='container'>
          <div>
            <p>You are logged in as {user.email}</p>
          </div>
          <button
            type='button'
            className='btn btn-outline-primary'
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      ) : (
        <Redirect
          to={{
            pathname: LOGIN_PATH,
          }}
        />
      )}
    </React.Fragment>
  )
}

Logout.propTypes = {
  logOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

export default Logout
