// @flow
import React, { Component } from 'react'

import Button from 'components/Button'
import Logo from 'components/Logo'
import HomescreenChart from 'components/Homescreen/HomescreenChart'
import ConnectModal from 'components/Homescreen/ConnectModal'

export default class HomescreenHeader extends Component {

  render(){
    return(
      <Wrapper hCenter >
        <Top jcsb>
          <Logo />
          <SignInButton>Sign in</SignInButton>
        </Top>
        <Column hCenter>
          <Title>Be a smarter crypto investor</Title>
          <SubTitle>Map your assets to your friends <br/> and world’s crypto influencers</SubTitle>
        </Column>

        <HomescreenChart />
        <SignUpButton big white>Sign Up</SignUpButton>
        <ConnectModal />
      </Wrapper>
    )
  }

}


// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'
import * as h from 'styles/homescreen'

const Wrapper = styled(Column)` height:800px; ${s.rel}
  background-image: linear-gradient(-70deg, #262CBF 0%, #5240D6 86%);
`

  const Top = styled(Row)` width:100%; max-width:1200px; margin:60px 0; `
    const SignInButton = styled.div` font-size:16px; color:white; text-transform:uppercase;  `


  const Title = styled.div` color:white;  font-size:40px; font-weight:600; letter-spacing:-1px; text-rendering: geometricPrecision; `
  const SubTitle = styled.div` color:${m.colors.white60}; font-size:28px; font-weight:300; letter-spacing:-0.7px; text-rendering: geometricPrecision;`

  const SignUpButton = styled(Button)` width:120px; position:absolute; bottom:48px; `
