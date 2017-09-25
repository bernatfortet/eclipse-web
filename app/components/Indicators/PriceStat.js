// @flow
import React, { Component } from 'react'

export default class PriceStat extends Component {

  static defaultProps = {
    value: 0,
  }

  render(){
    const { value } = this.props
    return(
      <Wrapper>${value}</Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  `
