// @flow
import React, { Component } from 'react'

import Screen from 'app/Screens/Screen'

import Toolbar from 'components/Toolbar/Toolbar'
import CoinData from 'components/CoinData'
import CommentsSection from 'components/CommentsSection'
import GrowthSidebar from 'components/GrowthSidebar'
import CoinChart from 'components/Charts/CoinChart'

export default class Coin extends Screen {

  render(){
    return(

      <Wrapper>
        <Toolbar />
        <Content>
          <CoinChart />
          <Inner jcsb>
            <CoinData />
            <CommentsSection />
            <GrowthSidebar />
          </Inner>

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
  const Content = styled(m.Content)` flex:1; ${s.flxCol}  `
    const Inner = styled(Row)` margin-top:20px;  padding:30px; `
