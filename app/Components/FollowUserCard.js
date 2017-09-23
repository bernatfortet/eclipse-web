// @flow
import React, { Component } from 'react'

import Avatar from 'components/Avatar'
import FollowButton from 'components/FollowButton'

import { Link } from 'react-router-dom'

export default class FollowUserCard extends Component {

  static defaultProps = {
    user: {
      name: 'Vinny Lingham',
      userName: 'vinnylingham',
      imageUrl: 'https://pbs.twimg.com/profile_images/868501388636045312/hRzmxxvG_400x400.jpg'
    },
  }

  render(){
    const { user } = this.props
    const link = { to: `/profile/${user.userName}` }
    return(
      <Wrapper {...link}>
        <Avatar size={52} imageUrl={user.imageUrl} />
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


const Wrapper = styled(Link)`padding:12px; ${m.box} ${m.tLink} ${s.flxRow}`

  const UserName = styled.div` ${m.t2} margin-bottom:8px;
  &:hover{ color:${m.colors.brand}; }
  `
