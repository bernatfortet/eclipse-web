// @flow
import React, { Component } from 'react'
import InfluencerCard from 'components/InfluencerCard'
import { highlightedInfluencers } from 'utils/mockData'

export default class HighlightedInfluencersList extends Component {

  static defaultProps = {
    highlightedInfluencers: highlightedInfluencers,
  }

  render(){
    return(
      <Wrapper>
        <List hCenter>
          {this.renderInfluencers()}
        </List>
      </Wrapper>
    )
  }

  renderInfluencers(){
    const { highlightedInfluencers } = this.props
    return Object.keys(highlightedInfluencers).map( key => {
      const influencer = highlightedInfluencers[key]
      return <InfluencerCard key={key} influencer={influencer} />
    })
  }

}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` width:100%; height:360px; ${s.rel} margin:20px 0; overflow-x:hidden; `
  const List = styled(Row)`width:2000px; ${s.abs} top:0; left:50%;  margin-left:-1000px;
  `
