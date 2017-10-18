// @flow
import React, { Component } from 'react'

import MyHoldings from 'components/MyHoldings'
import CoinLogo from 'components/CoinLogo'

import { coins } from 'utils/mockData'
import { cryptocurrencies } from 'utils/cryptocurrencies'

export default class CoinData extends Component {

  static defaultProps = {
    coin: coins['BTC'],
  }

  render(){
    const { coin } = this.props

    const coinName = cryptocurrencies[coin.symbol].name
    return(
      <Wrapper>

        <Row vCenter>
          <CoinLogo size={40} symbol={coin.symbol} />
          <CoinName>{coinName}</CoinName>
        </Row>

        <Title>Your Holdings</Title>
        <MyHoldings coin={coin} />

        <Title>Market Cap</Title>
        <Value>$66,115,458,697</Value>

        <Title>Circulating Supply</Title>
        <Value>16,574,112 BTC</Value>

        <Title>Max Supply</Title>
        <Value>21,000,000</Value>

      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` width:200px; padding:0 20px; `

  const CoinName = styled.div` ${m.h2} margin-left:8px; font-weight:600;`
  const Title = styled.div` margin:16px 0 4px; ${m.t3} font-weight:500; color:${m.colors.black50}; `
  const Value = styled.div` ${m.t3} `
