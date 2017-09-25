// @flow
import React, { Component } from 'react'

import CoinLogo from 'components/CoinLogo'
import DonutChart from 'components/Charts/DonutChart'

import { coins } from 'utils/mockData'
import { cryptocurrencies } from 'utils/cryptocurrencies'

export default class CoinData extends Component {

  static defaultProps = {
    coin: coins['BTC'],
  }

  render(){
    const { coin } = this.props

    const coinColor = cryptocurrencies[coin.symbol].color
    return(
      <Wrapper>

        <Row>
          <CoinLogo symbol={coin.symbol} />
          <CoinName>Bitcoin</CoinName>
        </Row>

        <Title>Market Cap</Title>
        <Value>$66,115,458,697</Value>

        <Title>Circulating Supply</Title>
        <Value>16,574,112 BTC</Value>

        <Title>Max Supply</Title>
        <Value>21,000,000</Value>

        <DonutChart percet={coin.percentPortfolio} color={coinColor} />
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` padding:20px; `

  const CoinName = styled.div`  `
  const Title = styled.div` margin:16px 0 4px; ${m.t3} font-weight:500; color:${m.colors.black50}; `
  const Value = styled.div` ${m.t3} `
