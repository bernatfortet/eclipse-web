// @flow
import React, { Component } from 'react'

import Avatar from 'components/Avatar'
import FollowButton from 'components/FollowButton'

export default class FollowInfluencerCard extends Component {

  static defaultProps = {
    user: {
      name: 'Vinny Lingham',
      imageUrl: 'https://pbs.twimg.com/profile_images/868501388636045312/hRzmxxvG_400x400.jpg'
    },
  }

  render(){
    const { user } = this.props
    return(
      <Wrapper>
        <Avatar size={52} />
        <Column style={{marginLeft:12}} aifs >
          <UserName>{user.name}</UserName>
          <FollowButton />
        </Column>
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Row)` width:100%; padding:12px; ${m.border} ${m.rounding} `

  const UserName = styled.div` ${m.t1} margin-bottom:8px; `
