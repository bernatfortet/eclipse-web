// @flow
import React, { Component } from 'react'

import ExchangeCard from 'components/Connect/ExchangeCard'
import WalletCard from 'components/Connect/WalletCard'

import { exchanges, wallets } from 'utils/mockData'

export default class AccountsStep extends Component {

  static defaultProps = {
    exchanges: exchanges,
    wallets: wallets,
  }

  render(){
    return(
      <Wrapper>
        <List>
          {this.renderExchanges()}
        </List>
        <List>
          {this.renderWallets()}
        </List>
      </Wrapper>
    )
  }

  renderExchanges(){
    const { exchanges } = this.props
    return Object.keys(exchanges).map( key => {
      const exchange = exchanges[key]
      return <ExchangeCard key={key} exchange={exchange} />
    })

  }

  renderWallets(){
    const { wallets } = this.props
    return Object.keys(wallets).map( key => {
      const wallet = wallets[key]
      return <WalletCard key={key} wallet={wallet} />
    })

  }


}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'


const Wrapper = styled.div`  `

  const List = styled(Row)` ${s.flxWrap} margin:-8px 0 0 -8px; `
