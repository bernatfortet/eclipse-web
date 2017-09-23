// @flow
import React, { Component } from 'react'

import Screen from 'app/Screens/Screen'
import Toolbar from 'components/Toolbar/Toolbar'

import HoldingsTreeMap from 'components/Charts/HoldingsTreeMap'
import HoldingsTable from 'components/HoldingsTable'

export default class Holdings extends Screen {

  render(){
    return(

      <Wrapper>
        <Toolbar />
        <Content>
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
