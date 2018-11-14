import { combineReducers } from 'redux'
import sessionStore from './sessionStore'
import productStore from './productStore'

export default combineReducers({
  sessionStore,
  productStore,
})
