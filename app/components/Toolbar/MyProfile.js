// @flow
import React, { Component } from 'react'

import Avatar from 'components/Avatar'
import NavigationLink from 'components/Toolbar/NavigationLink'

export default class MyProfile extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    return(
      <Link to='/profile/vinnylingham'>
        <Avatar />
        <ProfileText>Profile</ProfileText>
      </Link>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'


const Link = styled(NavigationLink)` padding:12px 12px;`

  const ProfileText = styled.div` margin-left:12px; ${m.tNav}`
