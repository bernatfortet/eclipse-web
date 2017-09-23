// @flow
import React, { Component } from 'react'

import FollowUserCard from 'components/FollowUserCard'
import FindFriendsButton from 'components/FindFriendsButton'

import { influencers } from 'utils/mockData'


export default class GrowthSidebar extends Component {

  static defaultProps = {
    influencers: influencers,
  }

  render(){
    return(
      <Wrapper>
        <m.H2>Follow Influencers</m.H2>
        <List>
          {this.renderUserCards()}
        </List>

        <m.H2>Find Friends</m.H2>
        <List>
          <FindFriendsButton serviceName='facebook' />
          <FindFriendsButton serviceName='twitter' />
          <FindFriendsButton serviceName='email' />
        </List>
      </Wrapper>
    )
  }

  renderUserCards(){
    const { influencers } = this.props
    return Object.keys(influencers).map( key => {
      const influencer = influencers[key]
      return <FollowUserCard key={key} user={influencer} />
    })
  }

}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` width:280px;  `

  const List = styled.div` margin-bottom:16px;
    & > * { margin-bottom:8px;}
  `
