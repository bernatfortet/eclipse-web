// @flow
import 'whatwg-fetch'

import React, { Component } from 'react'

import { coins } from 'utils/mockData'
import { cryptocurrencies } from 'utils/cryptocurrencies'
import Change from 'components/Change'

import CoinLogo from 'components/CoinLogo'
import SparkVolumeLine from 'components/Charts/SparkVolumeLine'

export default class HoldingsTable extends Component {

  static defaultProps = {
    coins: coins,
  }

  render(){
    return(
      <Wrapper>
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

  renderRow( coin: Object, key: number ){
    const coinName = cryptocurrencies[coin.symbol]
    const coinColor = cryptocurrencies[coin.symbol].color

    return(
      <Row key={key} vCenter>
        <Block>
          <CoinLogo size={48} symbol={coin.symbol}/>
          <CoinName>{coinName.name}</CoinName>
        </Block>
        <Block>
          <Amount>{coin.amount}</Amount>
        </Block>
        <Block>
          <Change value={coin.change} />
        </Block>
        <Block>
          <SparkVolumeLine symbol={coin.symbol} color={coinColor} />
        </Block>
      </Row>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Column)` padding-bottom:40px;  `
  const CoinName = styled.div` margin-left:12px; ${m.h2} font-weight:500; `
  const Amount = styled.div` font-size:36px; `
  // const Change = styled.div` ${m.changeColors} `

  const Block = styled(Row)` flex:1; padding:12px 0; ${s.aic} `
