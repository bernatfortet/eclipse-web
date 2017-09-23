// @flow
import React, { Component } from 'react'

import CoinBadge from 'components/CoinBadge'

import { coins } from 'utils/mockData'

export default class UserHoldings extends Component {

  static defaultProps = {
    coinHoldings: coins,
  }

  render(){
    return(
      <Wrapper>
        <CoinbadgesContainer>
          <m.T4>Holdings</m.T4>
          <CoinBadgesList>
            {this.renderCoins()}
          </CoinBadgesList>
        </CoinbadgesContainer>
      </Wrapper>
    )
  }

  renderCoins(){
    const { coinHoldings } = this.props
    return Object.keys(coinHoldings).map( key => {
      const coin = coinHoldings[key]
      return <CoinBadge key={key} coin={coin} />
    })
  }

}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Row)` margin-bottom:20px; padding-bottom:20px; border-bottom:${m.borderStyle};`

  const CoinbadgesContainer = styled.div`  `

    const CoinBadgesList = styled(Row)` margin-top:12px;
      & > * { margin-right:8px; }
    `
