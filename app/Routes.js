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

// Styles
import { MainAppWrapper } from 'styles/main'

const Routes = () => (
  <MainAppWrapper>
    <Route exact path={`/`} component={HomeScreen}/>
    <Route exact path={`/Color`} component={ColorGrabber}/>
    <Route exact path={`/settings`} component={Settings}/>
    <Route exact path={`/dashboard`} component={Dashboard}/>
    <Route exact path={`/holdings`} component={Holdings}/>
    <Route exact path={`/profile/:userId`} component={Profile}/>
    <Route exact path={`/coin/:coinId`} component={Coin}/>
    <Route exact path={`/styleguide`} component={StyleGuide}/>
  </MainAppWrapper>
)

export default Routes
