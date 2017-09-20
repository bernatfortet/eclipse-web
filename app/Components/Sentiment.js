// @flow
import React, { Component } from 'react'

export const SENTIMENT_TYPES = {
  BUY: 'BUY',
  SELL: 'SELL',
  HODL: 'HODL',
}

export default class ClassName extends Component {

  static defaultProps = {
    type: SENTIMENT_TYPES.BUY,
    isActive: false,
    onClick: () => {},
  }

  render(){
    const { type, isActive, onClick } = this.props
    switch (type) {
      case SENTIMENT_TYPES.BUY:
        return <Wrapper tint={m.colors.green} isActive={isActive} onClick={onClick} >Buy</Wrapper>
      case SENTIMENT_TYPES.SELL:
        return <Wrapper tint={m.colors.red} isActive={isActive} onClick={onClick} >Sell</Wrapper>
      case SENTIMENT_TYPES.HODL:
        return <Wrapper tint={m.colors.brand} isActive={isActive} onClick={onClick} >Hodl</Wrapper>
    }
    return null
  }
}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const activeStyle = css` background-color: ${p => p.tint ? p.tint : '' };  color:white; `

const Wrapper = styled.div`
  padding:2px 8px;
  font-weight:500; text-transform:uppercase; border:2px solid; border-radius:4px; ${s.anchor}
  border-color: ${p => p.tint ? p.tint : '' };
  color: ${p => p.tint ? p.tint : '' };
  &:hover { background-color: ${p => p.tint ? p.tint : '' };  color:white; }
  ${p => p.isActive ? activeStyle : '' }
`
