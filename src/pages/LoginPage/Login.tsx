import React, { SyntheticEvent, ChangeEvent } from 'react'
import { Redirect } from 'react-router'

import { EmailField, PasswordField } from '../../components'
import { SEARCH_PATH } from '../../components/AppRoutes'
import { Location } from '../../types'

interface LoginProps {
  location?: Location
  onSubmit: (event: SyntheticEvent) => void
  errorMsg?: string
  isAuthorized?: boolean
  onChange: (
    fieldName: string
  ) => (event: ChangeEvent<HTMLInputElement>) => void
  email?: string
  password?: string
}

const Login = ({
  location = {} as Location,
  onSubmit,
  errorMsg,
  isAuthorized,
  onChange,
  email = '',
  password,
}: LoginProps): JSX.Element => {
  const { from } = location.state || { from: { pathname: SEARCH_PATH } }

  return (
    <React.Fragment>
      {isAuthorized ? (
        <Redirect to={from} />
      ) : (
        <div className='container'>
          {errorMsg ? (
            <div className='alert alert-danger' role='alert'>
              {errorMsg}
            </div>
          ) : null}
          <form onSubmit={onSubmit}>
            <EmailField value={email} onChange={onChange('email')} />
            <PasswordField
              caption='Password'
              name='password'
              value={password}
              onChange={onChange('password')}
            />
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  )
}

export default Login
