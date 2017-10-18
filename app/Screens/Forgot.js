// @flow
import React, { Component } from 'react'

export default class Forgot extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    return(
      <Wrapper>Forgot</Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  `
