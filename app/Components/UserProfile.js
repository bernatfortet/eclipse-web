// @flow
import React, { Component } from 'react'

import Avatar from 'components/Avatar'
import FollowButton from 'components/FollowButton'
import SocialButtons from 'components/SocialButtons'
import MdLocation from 'react-icons/lib/md/location-on'

export default class userProfile extends Component {

  static defaultProps = {
    user: {
      name: 'Vinny Lingham',
      userName: 'vinnylingham',
      imageUrl: 'https://pbs.twimg.com/profile_images/868501388636045312/hRzmxxvG_400x400.jpg',
    },
    location: 'Palo Alto, CA',
    bio: 'CEO of @CivicKey ($CVC), building global decentralized identity platform. Born in South Africa, lives in Silicon Valley. Founder @Gyft @NewtownPartners',
    followers: '321',
    following: '29k',
  }

  render(){
    const { user, bio, location, followers, following } = this.props
    return(
      <Wrapper>
        <UserAvatar size={128} imageUrl={user.imageUrl} />
        <UserMetaBlock>
          <m.H1>{user.name}</m.H1>
          <LocationRow>
            <MdLocation style={{marginRight:4}} />
            {location}
          </LocationRow>
          <SocialButtons />
        </UserMetaBlock>
        <Block vCenter>
          <Bio>{bio}</Bio>
        </Block>
        <FollowBlock>
          <FollowButton />
          <Row>
            <Row>
              <Value>{followers}</Value> followers
            </Row>
            <Row>
              <Value>{following}</Value> following
            </Row>
          </Row>
        </FollowBlock>
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'


const profileBodyText = m.colors.black80

const Wrapper = styled(Row)` margin-bottom:20px; padding-bottom:20px;border-bottom:${m.borderStyle};`

  const UserAvatar = styled(Avatar)` margin-right:24px;  `

  const Bio = styled(m.TBody)` max-width:360px; color:${profileBodyText}; `

  const LocationRow = styled.div` margin-bottom:8px; color:${profileBodyText}; ${s.aic} `

  const Block = styled(Column)` padding-right:16px; margin-right:16px; border-right:${m.borderStyle};  `


  const UserMetaBlock = styled(Block)` width:100%; max-width:240px; `

  // Follow Block
  const Value = styled.div` font-size:24px; margin-right:4px; `

  const FollowBlock = styled(Block)` flex:1; font-size:18px; color:${profileBodyText}; ${s.jcc} ${s.aic}
    & ${Row}{ ${s.aife} margin-top:12px; }
    & ${Row} ${Row}:first-child{ margin-right:12px; }
  `
