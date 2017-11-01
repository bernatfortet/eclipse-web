// @flow
// Routes Components
import React from 'react'
import { Route } from 'react-router-dom'

import LandingScreen from 'app/Screens/LandingScreen'
import Dashboard from 'app/Screens/Dashboard'
import Holdings from 'app/Screens/Holdings'
import Profile from 'app/Screens/Profile'
import Coin from 'app/Screens/Coin'
import Connect from 'app/Screens/Connect'

// Styles
import { MainAppWrapper } from 'styles/main'

const Routes = () => (
  <MainAppWrapper>
    <Route exact path={`/`} component={LandingScreen}/>
    <Route exact path={`/connect`} component={Connect}/>

    <Route exact path={`/dashboard`} component={Dashboard}/>
    <Route exact path={`/holdings`} component={Holdings}/>
    <Route exact path={`/profile/:userId`} component={Profile}/>
    <Route exact path={`/coin/:coinSymbol`} component={Coin}/>
  </MainAppWrapper>
)

export default Routes
