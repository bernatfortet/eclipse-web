// @flow
import React, { Component } from 'react'

import CoinLogo from 'components/CoinLogo'
import PriceStat from 'components/Indicators/PriceStat'
import ChangeStat from 'components/Indicators/ChangeStat'
import CommentsStat from 'components/Indicators/CommentsStat'

import * as cryptocurrenciesUtils from 'utils/cryptocurrencies'

export default class TrackedCoin extends Component {

  static defaultProps = {
    symbol: 'BTC',
    currentPrice: 4423.55,
    change: 12.31,
    commentsCount: 54
  }

  render(){
    const { symbol, currentPrice, change, commentsCount } = this.props

    const coinName = cryptocurrenciesUtils.getCoinNameFromSymbol(symbol)

    return(
      <Wrapper>
        <Header jcc>
          <CoinLogo symbol={symbol} />
          <CoinName>{coinName}</CoinName>
        </Header>
        <Data jcsb aife>
          <PriceStat value={currentPrice} />
          <ChangeStat value={change} />
          <CommentsStat value={commentsCount} />
        </Data>
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` width:180px; padding:12px; position:relative; ${m.box} `

  const Header = styled(Row)` margin-bottom:8px;  `
    const CoinName = styled.div`  margin-left:8px; color:${m.colors.black}; ${m.t3} font-weight:500; `

  const Data = styled(Row)` color:${m.colors.black};  `
