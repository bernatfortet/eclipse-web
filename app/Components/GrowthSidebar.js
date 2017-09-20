// @flow
import React, { Component } from 'react'

import FollowInfluencerCard from 'components/FollowInfluencerCard'
import FindFriendsButton from 'components/FindFriendsButton'

export default class GrowthSidebar extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    return(
      <Wrapper>
        {'Follow Influencers'}
        <FollowInfluencerCard />
        <FollowInfluencerCard />
        <FollowInfluencerCard />

        {'Find Friends'}
        <FindFriendsButton />
        <FindFriendsButton />
        <FindFriendsButton />
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  `
