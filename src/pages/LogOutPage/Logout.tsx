import React from 'react'
import { Redirect } from 'react-router'

import { LOGIN_PATH } from '../../components/AppRoutes'
import { User } from '../../reducers/types'

interface LogoutProps {
  logOut: () => void
  user: User
}

const Logout = ({ logOut, user }: LogoutProps): JSX.Element => {
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

export default Logout
