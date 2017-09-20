// @flow
import React, { Component } from 'react'

import CoinLogo from 'components/CoinLogo'
import * as cryptocurrenciesUtils from 'utils/cryptocurrencies'

export default class ClassName extends Component {

  static defaultProps = {
    symbol: 'BTC',
    amount: 127.12,
    change: '48%',
  }

  render(){
    const { symbol, amount, change } = this.props

    const badgeColor = cryptocurrenciesUtils.getCoinColorFromSymbol(symbol)
    const coinName = cryptocurrenciesUtils.getCoinNameFromSymbol(symbol)

    return(
      <Wrapper>
        <Header backgroundColor={badgeColor}>
          <Circle>
            <CoinLogo symbol={symbol} />
          </Circle>
          <CoinName>{coinName}</CoinName>
        </Header>
        <Values>
          <Amount>{amount}</Amount>
          <Change value={change}>{change}</Change>
        </Values>
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` min-width:190px; ${m.border} ${m.rounding} `

  const Header = styled(Row)` padding:8px;  ${s.aic}
    background-color:${p => p.backgroundColor}; border-radius:${m.roundness}px ${m.roundness}px 0 0;
  `

  const Values = styled(Row)` padding:8px; ${s.jcsa} `
  const Circle = styled.div` width:32px; height:32px; background-color:white; border-radius:50%; ${s.jcc} ${s.aic} `
  const CoinName = styled.div`  margin-left:8px; ${m.t1} color:white;`
  const Amount = styled.div`  `
  const Change = styled.div` ${m.changeColors}  `
