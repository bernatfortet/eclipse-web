// @flow
import React, { Component } from 'react'

export default class Avatar extends Component {

  static defaultProps = {
    imageUrl: 'https://pbs.twimg.com/profile_images/868501388636045312/hRzmxxvG_400x400.jpg',
    size: 40,
    className: '',
  }

  render(){
    const { imageUrl, size, className } = this.props
    return(
      <Image src={imageUrl} size={size} className={className} />
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Image = styled.img`
  width:${p => p.size}px; height:${p => p.size}px; display:block; border-radius:50%;
`
