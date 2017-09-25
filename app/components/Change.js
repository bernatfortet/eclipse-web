// @flow
import React, { Component } from 'react'

export default class Change extends Component {

  static defaultProps = {
    value: 0,
  }

  render(){
    const { value } = this.props
    return <Value value={value}>{ value > 0 ? `+${value}` : value }%</Value>
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Value = styled.div` ${m.changeColors} `
