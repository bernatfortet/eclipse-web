// @flow
import React, { Component } from 'react'

export default class SourceCard extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    return(
      <Wrapper>SourceCard</Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  `
