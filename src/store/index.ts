// import { createStore, applyMiddleware, compose } from 'redux'
import { compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import rootReducer from '../reducers'
import { init } from '@rematch/core'
import immerPlugin from '@rematch/immer'
import models from './models'
console.log('models', models)

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const middlewares = [
  thunkMiddleware
]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

const immer = immerPlugin()

type M = typeof models
const store = init<M>({
  models,
  plugins: [immer],
  redux: {
    middlewares,
    enhancers: [composeEnhancers()],
  },
})
if (wx) {
  wx.store = store
}
const dispatch = store.dispatch

export { dispatch }

console.log('store', store)

export default store
