import React, { useState, SyntheticEvent, ChangeEvent } from 'react'
import { connect } from 'react-redux'

import { logIn } from '../../actions/sessionActions'
import Login from './Login'
import { isValidEmail, hashCode } from '../../helpers/service'
import { User } from '../../reducers/types'
import { Store } from '../../reducers/types'

interface LoginPageProps {
  isAuthorized: boolean
  errorMsg: string
  admin: User
  logIn: <P>(params: P) => any
}

type Target = {
  email: { value: string }
  password: { value: string }
}

const LoginPage = (props: LoginPageProps): JSX.Element => {
  const [state, setState] = useState({
    errorMsg: props.errorMsg,
    email: 'admin@myself.com',
    password: 'admin',
  })

  const handleChange =
    (fieldName: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [fieldName]: event.target.value,
      })
    }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()

    const { email, password } = state
    const target = event.target as typeof event.target & Target

    if (!isValidEmail(target.email.value)) {
      setState({
        ...state,
        errorMsg: 'email address is incorrect',
      })
      return null
    }
    // pass 'admin' cause we have no server part authorization
    props.logIn({
      email,
      password: hashCode(password),
      admin: props.admin,
    })
  }

  const { email, password } = state
  return (
    <Login
      errorMsg={props.errorMsg || state.errorMsg}
      onSubmit={handleSubmit}
      onChange={handleChange}
      email={email}
      password={password}
    />
  )
}

const mapStateToProps = ({ sessionStore }: Store) => ({
  isAuthorized: sessionStore.user.email !== '',
  errorMsg: sessionStore.errorMsg,
  user: sessionStore.user,
  admin: sessionStore.admin,
})

const mapDispatchToProps = {
  logIn: (params: any) => logIn(params),
}

const WrappedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage)
export { WrappedLoginPage as LoginPage }
