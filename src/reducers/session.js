import { LOG_IN, LOG_OUT, LOG_IN_FAIL } from '../actions/sessionActions'
import { user, errorMsg } from './initialStore.json'

const initialState = {
  user,
  errorMsg,
}

export default (state = initialState, action) => {
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
        errorMsg: action.payload.errorMsg,
      }
    default:
      return state;
  }
}
