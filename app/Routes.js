// @flow
// Routes Components
import React from 'react'
import { Route } from 'react-router-dom'

import HomeScreen from 'app/Screens/HomeScreen'
import Dashboard from 'app/Screens/Dashboard'
import Holdings from 'app/Screens/Holdings'
import Profile from 'app/Screens/Profile'
import Coin from 'app/Screens/Coin'
import ColorGrabber from 'app/Screens/ColorGrabber'
import StyleGuide from 'app/Screens/StyleGuide'
import Settings from 'app/Screens/Settings'
import Connect from 'app/Screens/Connect'
import Forgot from 'app/Screens/Forgot'

// Styles
import { MainAppWrapper } from 'styles/main'

const Routes = () => (
  <MainAppWrapper>
    <Route exact path={`/`} component={HomeScreen}/>
    <Route exact path={`/connect`} component={Connect}/>
    <Route exact path={`/forgot`} component={Forgot}/>

    <Route exact path={`/dashboard`} component={Dashboard}/>
    <Route exact path={`/holdings`} component={Holdings}/>
    <Route exact path={`/profile/:userId`} component={Profile}/>
    <Route exact path={`/coin/:coinSymbol`} component={Coin}/>
    <Route exact path={`/settings`} component={Settings}/>

    <Route exact path={`/styleguide`} component={StyleGuide}/>
    {/* <Route exact path={`/Color`} component={ColorGrabber}/> */}
  </MainAppWrapper>
)

export default Routes
