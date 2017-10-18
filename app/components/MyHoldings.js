// @flow
import React, { Component } from 'react'

import DonutChart from 'components/Charts/DonutChart'
import CoinLogo from 'components/CoinLogo'
import { cryptocurrencies } from 'utils/cryptocurrencies'

export default class MyHoldings extends Component {

  static defaultProps = {
    coin: {}
  }

  render(){
    const { coin } = this.props
    const coinColor = cryptocurrencies[coin.symbol].color

    console.log(`coinColor`, coinColor )

    return(
      <Wrapper vCenter jcsb >
        <Row vCenter>
          <Amount>{coin.amount}</Amount>
          <CoinLogo symbol={coin.symbol} />
        </Row>
        <DonutChart value={coin.percentPortfolio} color={`${coinColor}`} />
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Row)`  `
  const Amount = styled.div` margin-right:4px; font-size:24px; font-weight:500; `
