// @flow
import * as cryptocurrenciesUtils from 'utils/cryptocurrencies'

import React, { Component } from 'react'
import CoinLogo from 'components/CoinLogo'
import PriceStat from 'components/Indicators/PriceStat'
import ChangeStat from 'components/Indicators/ChangeStat'
import CommentsStat from 'components/Indicators/CommentsStat'

import MdStar from 'react-icons/lib/md/star'

export default class NavigationTrackedCoin extends Component {

  static defaultProps = {
    symbol: 'BTC',
    currentPrice: 4423.55,
    change: 12.31,
    commentsCount: 54
  }

  render(){
    const { symbol, currentPrice, change, commentsCount, onClick } = this.props

    const coinName = cryptocurrenciesUtils.getCoinNameFromSymbol(symbol)

    return(
      <Wrapper onClick={onClick}>
        <Header vCenter>
          <CoinLogo size={22} symbol={symbol} isEncircled={true} />
          <CoinName>{coinName}</CoinName>
          <StarIcon />
        </Header>
        <Row jcsb aife>
          <PriceStat value={currentPrice} />
          <ChangeStat value={change} />
          <CommentsStat value={commentsCount} />
        </Row>

      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Column)` padding:12px 12px; flex:1; position:relative; `

  const Header = styled(Row)` margin-bottom:8px;  `
  const CoinName = styled.div`  margin-left:8px; ${m.tNav} `
  const StarIcon = styled(MdStar).attrs({ size:12 })` margin-left:4px; `
