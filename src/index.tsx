import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore, compose } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose
const store = createStore(rootReducer, composeEnhancers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
