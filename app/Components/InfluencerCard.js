// @flow
import React, { Component } from 'react'

import Avatar from 'components/Avatar'
import FollowButton from 'components/FollowButton'

import { comments } from 'utils/mockData'

export default class InfluencerCard extends Component {

  static defaultProps = {
    influencer: {
      name:'Naval Ravikant',
      userName: 'naval',
      imageUrl:'https://pbs.twimg.com/profile_images/749155852683055104/0StT9uYS_400x400.jpg',
      comment: { text: 'With China banning ICO’s I see it as an opportune time to jump in a purchase BTC. Some people might feel otherwise but I think this is the time to go all in! ' }
    },
  }

  render(){
    const { influencer } = this.props
    return(
      <Wrapper hCenter>
        <InfluencerAvatar imageUrl={influencer.imageUrl} />

        <Header vCenter jcsb flex={1}>
          <m.T2>{influencer.name}</m.T2>
          <FollowButton />
        </Header>
        <Comment>
          {influencer.comment.text}
        </Comment>
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const padding = 36
const avatarSize = 120
const Wrapper = styled(Column)` width:100%; max-width:${360-padding*2}px; ${m.box} ${s.rel}
   margin:${avatarSize/2}px 6px 0; padding:60px ${padding}px ${padding}px;
`

  const InfluencerAvatar = styled(Avatar).attrs({ size: avatarSize })` ${s.abs} left:50%; top:-${avatarSize/2}px; margin-left:-${avatarSize/2}px; `
  const Header = styled(Row)` ${s.ass} margin-bottom:12px; `
  const Comment = styled.div` ${m.tBody} `
