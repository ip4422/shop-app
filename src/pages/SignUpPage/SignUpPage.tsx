import React, { useState, SyntheticEvent } from 'react'
import { connect } from 'react-redux'

import { signUp } from '../../actions/sessionActions'
import SignUp from './SignUp'
import { isValidEmail, hashCode } from '../../helpers/service'
import { User } from '../../reducers/types'
import { Store } from '../../reducers/types'

interface SignUpPageProps {
  isAuthorized: boolean
  errorMsg: string
  user: User
  admin: User
  signUp: <T>(params: T) => void
}

type Target = {
  email: { value: string }
  password: { value: string }
  confirmPassword: { value: string }
}

// TODO: refactor of state manipulation
const SignUpPage = (props: SignUpPageProps): JSX.Element => {
  const [state, setState] = useState({
    errorMsg: props.errorMsg,
  })

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    const { signUp } = props
    const target = event.target as typeof event.target & Target

    if (!isValidEmail(target.email.value)) {
      setState(prev => ({
        ...prev,
        errorMsg: 'email address incorrect',
      }))
      return null
    }
    if (target.password.value !== target.confirmPassword.value) {
      setState(prev => ({
        ...prev,
        errorMsg: "password didn't match",
      }))
      return null
    }
    signUp({
      email: target.email.value,
      password: hashCode(target.password.value),
    })
  }

  return (
    <SignUp
      isAuthorized={props.isAuthorized}
      errorMsg={props.errorMsg || state.errorMsg}
      onSubmit={handleSubmit}
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
  signUp: (params: any) => signUp(params),
}

const WrappedSignUpPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage)
export { WrappedSignUpPage as SignUpPage }
