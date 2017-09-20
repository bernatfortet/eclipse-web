// @flow
import React, { Component } from 'react'

import CoinLogo from 'components/CoinLogo'
import * as cryptocurrenciesUtils from 'utils/cryptocurrencies'

export default class CoinTracked extends Component {

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
        <Row jcsb>
          <CurrentPrice>{currentPrice}</CurrentPrice>
          <Change value={change}>{change}</Change>
          <CommentsCount>{commentsCount}</CommentsCount>
        </Row>

      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` min-width:180px; padding:12px; ${m.border} ${m.rounding} `

  const Header = styled(Row)` margin-bottom:8px;  `

  const CoinName = styled.div`  margin-left:8px; color:${m.colors.black}; ${m.t1} `
  const CurrentPrice = styled.div`  `
  const Change = styled.div` ${m.changeColors} `
  const CommentsCount = styled.div`  `
