// @flow
import React, { Component } from 'react'

import Link from 'components/Link'
import Logo from 'components/Logo'
import Avatar from 'components/Avatar'
import Navigation from './Navigation'
import CoinNavigation from './CoinNavigation'

import MdSettings from 'react-icons/lib/md/settings'



export default class Toolbar extends Component {

  render(){
    return(
      <Wrapper>
        <Logo />
        <Navigation />
        <CoinNavigation />

        <Flex1 />

        {this.renderProfileSection()}

      </Wrapper>
    )
  }
  renderProfileSection(){
    return(
      <ProfileWrapper jcsb vCenter>
        <Link to='/profile/vinnylingham'>
          <ProfileButton vCenter>
            <Avatar />
            <ProfileText>Profile</ProfileText>
          </ProfileButton>
        </Link>
        <Link to='/settings'>
          <SettingsIcon />
        </Link>
      </ProfileWrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column, Flex1 } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Column)` width:${m.TOOLBAR_WIDTH}px; height:100%; position:fixed; background:${m.colors.darkBackground};  `

  const ProfileWrapper = styled(Row)` margin:12px 0; `

    const ProfileButton = styled(Row)` margin-left:12px; color:${m.colors.white60}; ${s.anchor}
      &:hover{ color:white; }
    `
    const ProfileText = styled.div` margin-left:12px;`
    const SettingsIcon = styled(MdSettings)` padding:12px; color:${m.colors.white60}; ${s.anchor}
      &:hover{ color:white; }
    `
