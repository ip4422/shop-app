import React from 'react'
import PropTypes from 'prop-types'

//TODO: need to be refactored

const Logout = ({ logOut, user }) => {
  const getUserInfo = () => {
    if (user.email) {
      return (
        <div>
          <p>You are logged in, {user.email}</p>
        </div>
      )
    } else {
      return (
        <div>
          <p>You should login first</p>
        </div>
      )
    }
  }

  return (
    <div className='container'>
      {getUserInfo()}
      <button
        type='button'
        className='btn btn-outline-primary'
        onClick={logOut}
      >
        Logout page
      </button>
    </div>
  )
}

Logout.propTypes = {
  logOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

export default Logout
