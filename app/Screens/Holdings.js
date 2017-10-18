// @flow
import React, { Component } from 'react'

import Screen from 'app/Screens/Screen'
import Toolbar from 'components/Toolbar/Toolbar'

import HoldingsTreeMap from 'components/Charts/HoldingsTreeMap'
import SparkVolumeLine from 'components/Charts/SparkVolumeLine'
import HoldingsTable from 'components/HoldingsTable'

export default class Holdings extends Screen {

  render(){
    return(

      <Wrapper>
        <Toolbar />
        <Content>
          <TotalStats>
            <Block>
              <m.T4>Value</m.T4>
              <Value>$56,500</Value>
            </Block>

            <Block>
              <m.T4>Invested</m.T4>
              <Value>$5,500</Value>
            </Block>

            <Block>
              <m.T4>Absolute Growth</m.T4>
              <SparkVolumeLine symbol={'BTC'} color={'orange'} />
            </Block>

          </TotalStats>
          <HoldingsTreeMap />
          <HoldingsTable />
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

  const TotalStats = styled(Row)` margin-bottom:24px; `
    const Block = styled(Column)` margin-right:80px;  `
      const Value = styled.div` font-size:44px; font-weight:600; `
