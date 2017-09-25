// @flow
import React, { Component } from 'react'
import * as utils from 'utils/cryptocurrencies'

export default class CoinLogo extends Component {

  static defaultProps = {
    symbol: 'BTC',
    imageUrl: '',
    desaturate: false,
    size: 20,
    isEncircled: false,
  }

  render(){
    const { isEncircled } = this.props

    if( isEncircled )
      return(
        <LogoCircle>
          {this.renderLogo()}
        </LogoCircle>
      )
    else
      return this.renderLogo()
  }

  renderLogo(){
    const { size, desaturate } = this.props
    return <Logo imageUrl={this.getImageUrl()} size={size ? size : 20} desaturate={desaturate ? true : false} />
  }

  getImageUrl(){
    const { imageUrl, coinName, symbol } = this.props
    if( imageUrl )
      return imageUrl
    else if( symbol )
      return `https://files.coinmarketcap.com/static/img/coins/64x64/${utils.getCoinIdFromSymbol(symbol)}.png`
    else if( coinName )
      return `https://files.coinmarketcap.com/static/img/coins/64x64/${coinName}.png`
    else
      return ''
  }

}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column, Circle } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Logo = styled.div.attrs({
  style: p => ({ backgroundImage: `url(${p.imageUrl})` })
})`
  ${p => `width: ${p.size}px; height: ${p.size}px;`}
  background-size:contain;
  background-repeat: no-repeat;
  ${p => p.desaturate ? desaturate : '' }
`

const LogoCircle = styled(Circle)` background-color:white; ${s.jcc} ${s.aic} `

const desaturate = css` filter: grayscale(1); `
