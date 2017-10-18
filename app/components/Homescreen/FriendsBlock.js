// @flow
import React, { Component } from 'react'
import Button from 'components/Button'

export default class FriendsBlock extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    return(
      <h.Block hCenter >
        <h.H2>YOUR COMMUNITY</h.H2>
        <h.H1>Discover friends in crypto</h.H1>
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
