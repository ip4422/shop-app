import {
  LOG_IN,
  LOG_OUT,
  LOG_IN_FAIL,
  SIGN_UP,
} from '../actions/sessionActions'
import { admin, user, errorMsg } from './initialStore.json'
import { SessionStore, User } from './types'
import { SessionAction } from '../actions/sessionActions'

const initialState: SessionStore = {
  user,
  admin,
  errorMsg,
}

const sessionStore = (
  state = initialState,
  action: SessionAction
): SessionStore => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          email: (action.payload as User).email,
          password: (action.payload as User).password,
        },
        errorMsg: '',
      }
    case SIGN_UP:
      return {
        ...state,
        user: {
          email: (action.payload as User).email,
          password: (action.payload as User).password,
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
        errorMsg: action.payload as string,
      }
    default:
      return state
  }
}

export default sessionStore
