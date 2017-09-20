import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from 'controllers';


export default function configureStore(initialState = {}, history) {
  const logger = createLogger({
    level: 'info',
    collapsed: true,
    // predicate: (getState, action) => action.type !== 'SOME_ACTION' // to filter action types
  })

  const middlewares = [
  	thunk,
  	logger,
  	routerMiddleware(history),
  ]

  const enhancers = [
  	applyMiddleware(...middlewares),
  ]

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  /* eslint-enable */

  const store = createStore( rootReducer, initialState, composeEnhancers(...enhancers) )

  // Extensions
  store.asyncReducers = {} // Async reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('../controllers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}
