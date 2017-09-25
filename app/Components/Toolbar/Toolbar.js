// @flow
import React, { Component } from 'react'

import Logo from 'components/Logo'
import Navigation from 'components/Toolbar/Navigation'
import CoinNavigation from 'components/Toolbar/CoinNavigation'
import MyProfile from 'components/Toolbar/MyProfile'

export default class Toolbar extends Component {

  render(){
    return(
      <Wrapper>
        <Logo />
        <Navigation />
        <CoinNavigation />
        <Flex1 />
        <MyProfile />
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column, Flex1 } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Column)` width:${m.TOOLBAR_WIDTH}px; height:100%; position:fixed; background:${m.colors.darkBackground};  `
