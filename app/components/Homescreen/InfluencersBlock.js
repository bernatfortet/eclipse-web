// @flow
import React, { Component } from 'react'
import Button from 'components/Button'

import HighlightedInfluencersList from 'components/Homescreen/HighlightedInfluencersList'

export default class InfluencersBlock extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    return(
      <h.Block hCenter >
        <h.H2>SOCIAL NETWORK</h.H2>
        <h.H1>Follow the best crypto-influencers</h.H1>
        <HighlightedInfluencersList />

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
