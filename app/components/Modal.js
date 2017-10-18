// @flow
import React, { Component } from 'react'

export default class Modal extends Component {

  static defaultProps = {
    children: {},
    className: {},
  }

  render(){
    const { className } = this.props
    return(
      <Background vCenter hCenter className={className}>
        {this.props.children}
      </Background>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Background = styled(Column)` z-index:1000; position:fixed; width:100%; height:100%; background:${m.colors.black50}; `
