// @flow
import React, { Component } from 'react'
import Button from 'components/Button'

export default class AssetsBlock extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    return(
      <h.Block hCenter >
        <h.H2>ASSET ORGANIZATION</h.H2>
        <h.H1>Track all your crypto assets in one place</h.H1>
        <Button big>Start following top influencers</Button>
      </h.Block>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as h from 'styles/homescreen'

const Wrapper = styled.div`  `
