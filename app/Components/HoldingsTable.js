// @flow
import React, { Component } from 'react'

import { coins } from 'utils/mockData'
import { cryptocurrencies } from 'utils/cryptocurrencies'

import CoinLogo from 'components/CoinLogo'

export default class HoldingsTable extends Component {

  static defaultProps = {
    coins: coins,
  }

  render(){
    return(
      <Wrapper>
        {/* {this.renderRows()} */}
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
    return(
      <Row vCenter>
        <Block>
          <CoinLogo size={48} symbol={coin.symbol}/>
          <CoinName>{coinName}</CoinName>
        </Block>
        <Block>
          <Amount>{coin.amount}</Amount>
        </Block>
        <Block>
          <Change>{coin.change}</Change>
        </Block>
      </Row>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Column)`  `
  const CoinName = styled.div` margin-left:12px; ${m.h2} `
  const Amount = styled.div`  `
  const Change = styled.div`  `

  const Block = styled(Row)` flex:1; `
