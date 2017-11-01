// @flow
import React, { Component } from 'react'

import Screen from 'app/Screens/Screen'

import { Redirect } from 'react-router';

import Logo from 'components/Logo'
import HomescreenHeader from 'components/Homescreen/HomescreenHeader'
import FriendsBlock from 'components/Homescreen/FriendsBlock'
import AssetsBlock from 'components/Homescreen/AssetsBlock'
import InfluencersBlock from 'components/Homescreen/InfluencersBlock'

export default class LandingScreen extends Screen {

  render(){
    return(
      <Wrapper>
        <HomescreenHeader />
        {/* <FriendsBlock />
        <AssetsBlock />
        <InfluencersBlock /> */}
      </Wrapper>
    )
  }
}


// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` `
