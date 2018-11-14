import { combineReducers } from 'redux'
import session from './session'
import productStore from './productStore'

export default combineReducers({
  session,
  productStore,
})
