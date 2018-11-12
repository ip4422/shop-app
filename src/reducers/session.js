import { LOG_IN, LOG_OUT, LOG_IN_FAIL } from '../actions/sessionActions'
import { SET_ITEMS } from '../actions/itemsActions'
import { user, errorMsg, colors, items, curt } from './initialStore.json'
// "user": {
//   "email": "ya@ya.ru",
//   "password": "1234"
// },

const initialState = {
  user,
  errorMsg,
  colors,
  items,
  curt
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
        user: null,
        errorMsg: '',
      }
    case LOG_IN_FAIL:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      }
    case SET_ITEMS:
      return {
        ...state,
        // items: action.payload.items,
        items: state.items.map((item, index) => {
          return {
            ...item,
            isFiltered: action.payload[index].isFiltered,
          }
        })
      }

    default:
      return state;
  }
}