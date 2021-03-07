import {
  LOG_IN,
  LOG_OUT,
  LOG_IN_FAIL,
  SIGN_UP,
} from '../actions/sessionActions'
import { admin, user, errorMsg } from './initialStore.json'

const initialState = {
  user,
  admin,
  errorMsg,
}

const sessionStore = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          email: action.payload.email,
          password: action.payload.password,
        },
        errorMsg: '',
      }
    case SIGN_UP:
      return {
        ...state,
        user: {
          email: action.payload.email,
          password: action.payload.password,
        },
        errorMsg: '',
      }
    case LOG_OUT:
      return {
        ...state,
        user: {
          email: '',
          password: '',
        },
        errorMsg: '',
      }
    case LOG_IN_FAIL:
      return {
        ...state,
        errorMsg: action.payload,
      }
    default:
      return state
  }
}

export default sessionStore
