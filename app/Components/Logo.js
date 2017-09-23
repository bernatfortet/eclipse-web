// @flow
import React, { Component } from 'react'

export default class Logo extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    return(
      <Wrapper>APOLLO</Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` padding:16px; font-weight:600; color:white; ${s.tac} letter-spacing:0.4em;`
