// @flow
import React, { Component } from 'react'


import NavigationLink from 'components/Toolbar/NavigationLink'
import TrackedCoinItem from 'components/Toolbar/TrackedCoinItem'
import SearchBox from 'components/Toolbar/SearchBox'

import { coins } from 'utils/mockData'

export default class CoinNavigation extends Component {

  static defaultProps = {
    trackedCoins: coins,
  }

  render(){
    return(
      <Wrapper>
        <SearchBox />

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
        <NavigationLink key={key} to={`/coin/${trackedCoin.symbol}`}>
          <TrackedCoinItem
            symbol={trackedCoin.symbol}
            currentPrice={trackedCoin.currentPrice}
            onClick={() => this.onClickCoin(trackedCoin)}
          />
        </NavigationLink>
      )
    })
  }

  onClickCoin = ( trackedCoin: Object ) => {
    console.log(`this.props`, this.props )
    // this.props.push('/coin/')
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` padding:20px 0; border-top:1px solid ${m.colors.white10};`



const CoinsList = styled.div`  `
