// @flow
import React, { Component } from 'react'

import CoinTracked from 'components/CoinTracked'

export default class TrackedCoins extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    return(
      <Wrapper>
        <CoinTracked />
        <CoinTracked />
        <CoinTracked />
        <CoinTracked />
        <CoinTracked />
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`
  & > * { margin-bottom:8px; }
`
