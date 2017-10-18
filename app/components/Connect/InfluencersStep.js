// @flow
import React, { Component } from 'react'

import SelectableUsersList from 'components/Connect/SelectableUsersList'

import { highlightedInfluencers } from 'utils/mockData'


export default class InfluencersStep extends Component {

  static defaultProps = {
    influencers: highlightedInfluencers,
  }

  render(){
    const { influencers } = this.props
    return(
      <Wrapper>
        <SelectableUsersList users={influencers}/>
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  `
