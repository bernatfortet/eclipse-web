// Routes Components
import React from 'react'
import { Route } from 'react-router-dom'

import HomeScreen from 'app/Screens/HomeScreen'
import StyleGuide from 'app/Screens/StyleGuide'

// Styles
import { MainAppWrapper } from 'styles/main'

const Routes = () => (
  <MainAppWrapper>
    <Route exact path={`/`} component={HomeScreen}/>
    <Route exact path={`/styleguide`} component={StyleGuide}/>
  </MainAppWrapper>
)

export default Routes
