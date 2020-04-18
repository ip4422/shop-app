export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAIL = 'LOG_IN_FAIL'
export const SIGN_UP = 'SIGN_UP'

export function logIn(params, callBack) {
  return (dispatch) => {
    if (checkAccess(params)) {
      dispatch({
        type: LOG_IN,
        payload: {
          email: params.email,
          password: params.password,
        },
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

export function logOut() {
  return {
    type: LOG_OUT,
  }
}

export function signUp(params, callBack) {
  return (dispatch) => {
    dispatch({
      type: SIGN_UP,
      payload: {
        email: params.email,
        password: params.password,
      },
    })
    callBack()
  }
}

export function checkAccess(params) {
  return params.admin.password === params.password
}
