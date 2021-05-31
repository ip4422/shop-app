import React, { SyntheticEvent } from 'react'
import { Redirect } from 'react-router'

import { SEARCH_PATH } from '../../components/AppRoutes'
import { EmailField, PasswordField } from '../../components'
import { Location } from '../../types'

interface SignUpProps {
  errorMsg?: string
  onSubmit: (event: SyntheticEvent) => void
  location?: Location
  isAuthorized?: boolean
}

const SignUp = ({
  location = {} as Location,
  onSubmit,
  errorMsg,
  isAuthorized,
}: SignUpProps): JSX.Element => {
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
        <PasswordField caption={'Confirm Password'} name={'confirmPassword'} />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignUp
