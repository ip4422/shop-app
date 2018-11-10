import { checkAccess } from "../helpers/session"

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAIL = 'LOG_IN_FAIL'

export function logIn(params, callBack) {
  return dispatch => {
    if (checkAccess(params)) {
      dispatch({
        type: LOG_IN,
        payload: {
          email: params.email,
          password: params.password,
        }
      })
      callBack()
    } else {
      dispatch({
        type: LOG_IN_FAIL,
        payload: 'Wrong Username or Password',
      })

    }
  }
}

export function logOut(params) {
  return {
    type: LOG_OUT,
  }
}