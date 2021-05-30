import { User } from '../reducers/types'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAIL = 'LOG_IN_FAIL'
export const SIGN_UP = 'SIGN_UP'

interface SessionParams extends User {
  admin: User
}

export type SessionAction = {
  type: string
  payload?: User | string
}

export function logIn(params: SessionParams): SessionAction {
  if (checkAccess(params)) {
    return {
      type: LOG_IN,
      payload: {
        email: params.email,
        password: params.password,
      },
    }
  } else {
    return {
      type: LOG_IN_FAIL,
      payload: 'Wrong Username or Password',
    }
  }
}

export function logOut(): SessionAction {
  return {
    type: LOG_OUT,
  }
}

export function signUp(params: SessionParams): SessionAction {
  return {
    type: SIGN_UP,
    payload: {
      email: params.email,
      password: params.password,
    },
  }
}
export function checkAccess(params: SessionParams): boolean {
  return (
    params.admin.password === params.password &&
    params.admin.email === params.email
  )
}
