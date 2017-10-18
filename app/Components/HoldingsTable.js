// @flow
import 'whatwg-fetch'

import React, { Component } from 'react'

import { coins } from 'utils/mockData'
import { cryptocurrencies } from 'utils/cryptocurrencies'
import Change from 'components/Change'
import DonutChart from 'components/Charts/DonutChart'

import CoinLogo from 'components/CoinLogo'
import SparkVolumeLine from 'components/Charts/SparkVolumeLine'

export default class HoldingsTable extends Component {

  static defaultProps = {
    coins: coins,
  }

  render(){
    return(
      <Wrapper>
        {this.renderHeader()}
        {this.renderRows()}
      </Wrapper>
    )
  }

  renderRows(){
    const { coins } = this.props
    return Object.keys(coins).map( key => {
      const coin = coins[key]
      return this.renderRow( coin, key )
    })
  }

  renderHeader(){
    return(
      <Row>
        <HeaderLabel>Asset</HeaderLabel>
        <HeaderLabel>Amount</HeaderLabel>
        <HeaderLabel>Holdings</HeaderLabel>
        <HeaderLabel>Historic Growth</HeaderLabel>
        <HeaderLabel>Change: 24h</HeaderLabel>
      </Row>
    )
  }

  renderRow( coin: Object, key: number ){
    const coinName = cryptocurrencies[coin.symbol]
    const coinColor = cryptocurrencies[coin.symbol].color

    return(
      <RowItem key={key} vCenter>
        <Block vCenter>
          <CoinLogo size={44} symbol={coin.symbol}/>
          <CoinName>{coinName.name}</CoinName>
        </Block>
        <Block>
          <Amount>{coin.amount}</Amount>
        </Block>
        <Block>
          <DonutChart value={coin.percentPortfolio} color={`${coinColor}`} />
        </Block>
        <Block>
          <SparkVolumeLine symbol={coin.symbol} color={coinColor} />
        </Block>

        <Block>
          <SparkVolumeLine symbol={coin.symbol} color={coinColor} />
        </Block>
      </RowItem>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Column)` padding-bottom:40px;  `
  const HeaderLabel = styled.div` ${m.t4} flex:1; ${s.tal}
  ${p => p.right ? s.tar : ''}
  `

  const RowItem = styled(Row)` padding:8px 0; `
    const Block = styled(Row)` flex:1; padding:12px 0; ${s.tac} `
      const Amount = styled.div` font-size:36px; `
      const CoinName = styled.div` margin-left:12px; ${m.h2} font-weight:500; `
