// @flow
// ********************
// Action Creators
// ********************

import * as init from 'controllers/init'
import { push, goBack } from 'react-router-redux'


// ********************
// Exporting
// ********************
export const ActionCreators = {

  push,
  goBack,
}



// ********************
// Reducers
// ********************
import { combineReducers } from 'redux'

// Reducers
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  router: routerReducer,
})

export default rootReducer
