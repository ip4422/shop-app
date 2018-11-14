import { LOG_IN, LOG_OUT, LOG_IN_FAIL } from '../actions/sessionActions'
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

// селектор

//TODO: взять из state все карточки. взять фильтры из state(отправлять их диспатчем).  применить их к списку карточек. вернуть получившийся список из функции
// экспортим
export function selectCards(state) {
// return 
}