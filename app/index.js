import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './config/registerServiceWorker'
import './styles/global.css'

// Redux
import { Provider } from 'react-redux'
import configureStore from './config/store'

// Routing
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


console.log(`ConnectedRouter`, ConnectedRouter )


// Root Components
import App from './App'

const history = createHistory()
const initialState = {}
const store = configureStore(initialState, history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App}/>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'))


if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route path="/" component={App}/>
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root'),
    )
  })
}

registerServiceWorker()
