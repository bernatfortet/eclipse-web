// @flow
import React, { Component } from 'react'

export default class Logo extends Component {

  static defaultProps = {
    dark: null,
  }

  render(){
    const { dark } = this.props
    return(
      <Wrapper dark={dark ? true : false}>APOLLO</Wrapper>
    )
  }
}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const dark = css` color:${m.colors.black}`
const Wrapper = styled.div` padding:16px; font-weight:600; color:white; ${s.tac} letter-spacing:0.4em; ${p => p.dark ? dark : ''}`
