// @flow
import React, { Component } from 'react'
import TrackedCoin from 'components/TrackedCoin'
import Link from 'components/Link'

import { coins } from 'utils/mockData'

export default class TrackedCoins extends Component {

  static defaultProps = {
    trackedCoins: coins,
  }

  render(){
    return(
      <Wrapper>
        <m.T4>8 Tracked Coins</m.T4>
        <CoinsList>
          {this.renderCoins()}
        </CoinsList>
      </Wrapper>
    )
  }

  renderCoins(){
    const { trackedCoins } = this.props
    return Object.keys(trackedCoins).map( key => {
      const trackedCoin = trackedCoins[key]
      return(
        <Link key={key} to={`/coin/${trackedCoin.symbol}`}>
          <TrackedCoin
            symbol={trackedCoin.symbol}
            currentPrice={trackedCoin.currentPrice}
            onClick={() => this.onClickCoin(trackedCoin)}
          />
        </Link>
      )
    })
  }

  onClickCoin = ( trackedCoin: Object ) => {
    console.log(`User pressed Coin`, this.props )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`
`
const CoinsList = styled.div`
  & > * { margin-bottom:8px; }
 `
