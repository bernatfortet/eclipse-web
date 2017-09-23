// @flow
import React, { Component } from 'react'

import Screen from 'app/Screens/Screen'

import Toolbar from 'components/Toolbar/Toolbar'
import CoinData from 'components/CoinData'
import CommentsSection from 'components/CommentsSection'
import GrowthSidebar from 'components/GrowthSidebar'
import UserProfile from 'components/UserProfile'
import UserHoldings from 'components/UserHoldings'
import TrackedCoins from 'components/TrackedCoins'

export default class Dashboard extends Screen {

  render(){
    return(

      <Wrapper>
        <Toolbar />
        <Content>
          <Row jcsb>
            <TrackedCoins />
            <CommentsSection />
            <GrowthSidebar />
          </Row>

        </Content>
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(m.Screen)` ${s.flxRow}  `
  const Content = styled.div` width:100%; margin-left:180px; padding:30px;  `
