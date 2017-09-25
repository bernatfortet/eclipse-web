// @flow
import * as cryptocurrenciesUtils from 'utils/cryptocurrencies'

import React, { Component } from 'react'
import CoinLogo from 'components/CoinLogo'
import MdBubble from 'react-icons/lib/md/chat-bubble-outline'

export default class TrackedCoinItem extends Component {

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
        </Header>
        <Row jcsb aife>
          <CurrentPrice>{currentPrice}</CurrentPrice>
          <Change value={change}>{change > 0 ? '+' : ''}${change}%</Change>
          <Row>
            <ReplyIcon />
            <CommentsCount>{commentsCount}</CommentsCount>
          </Row>
        </Row>

      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Column)` padding:12px 12px; flex:1; `

  const Header = styled(Row)` margin-bottom:8px;  `

  const CoinName = styled.div`  margin-left:8px; ${m.tNav} `
  const CurrentPrice = styled.div`  `
  const Change = styled.div` ${m.changeColors} font-size:12px; `
  const CommentsCount = styled.div` font-size:12px; `

  const ReplyIcon = styled(MdBubble).attrs({ size:14 })` margin-right:4px; `
