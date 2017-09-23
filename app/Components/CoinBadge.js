// @flow
import React, { Component } from 'react'


import CoinLogo from 'components/CoinLogo'
import * as cryptocurrenciesUtils from 'utils/cryptocurrencies'

import { Link } from 'react-router-dom'

export default class ClassName extends Component {

  static defaultProps = {
    coin: {
      symbol: 'BTC',
      amount: 127.12,
      change: '48%',
    }
  }

  render(){
    const { symbol, amount, change } = this.props.coin

    const badgeColor = cryptocurrenciesUtils.getCoinColorFromSymbol(symbol)
    const coinName = cryptocurrenciesUtils.getCoinNameFromSymbol(symbol)

    return(
      <Wrapper to={`/coin/${symbol}`}>
        <Header backgroundColor={badgeColor}>
          <Circle>
            <CoinLogo symbol={symbol} />
          </Circle>
          <CoinName>{coinName}</CoinName>
        </Header>
        <Values>
          <Amount>
            {amount}
            {/* <m.CoinSymbol>{symbol}</m.CoinSymbol> */}
          </Amount>
          <Flex1 />
          <Change value={change}>{change}</Change>
        </Values>
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column, Flex1 } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Link)` width:190px; ${m.box} ${m.tLink}`

  const Header = styled(Row)` padding:8px;  ${s.aic}
    background-color:${p => p.backgroundColor}; border-radius:${m.roundness}px ${m.roundness}px 0 0;
  `

  const Values = styled(Row)` padding:8px;  `
  const Circle = styled.div` width:32px; height:32px; background-color:white; border-radius:50%; ${s.jcc} ${s.aic} `
  const CoinName = styled.div`  margin-left:8px; ${m.t2} color:white; font-weight:500;`
  const Amount = styled(Row)` color:${m.colors.black}; ${s.aife} `
  const Change = styled.div` ${m.changeColors}  `
