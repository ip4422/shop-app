import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

import rootReducer from './reducers'
import InitialStore from './reducers/initialStore.json'

const { admin, user, errorMsg, colors, items, filter, cart } = InitialStore

const initialStore = {
  sessionStore: {
    user,
    admin,
    errorMsg,
  },
  productStore: {
    colors,
    items,
    filter,
    cart,
  },
}

export const middlewares = [ReduxThunk]

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(
  rootReducer,
  initialStore,
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store
