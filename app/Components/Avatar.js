// @flow
import React, { Component } from 'react'

export default class Avatar extends Component {

  static defaultProps = {
    imageUrl: 'https://pbs.twimg.com/profile_images/868501388636045312/hRzmxxvG_400x400.jpg',
    size: 40,
    style: {},
  }

  render(){
    const { imageUrl, size, style } = this.props
    return(
      <Image src={imageUrl} size={size} style={style} />
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Image = styled.img`
  width:${p => p.size}px; height:${p => p.size}px; border-radius:50%;
`
