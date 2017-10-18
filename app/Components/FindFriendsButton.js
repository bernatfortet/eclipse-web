// @flow
import React, { Component } from 'react'

import FaTwitterSquare from 'react-icons/lib/fa/twitter-square'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import MdEmail from 'react-icons/lib/md/email'



export default class FindFriendsButton extends Component {

  static defaultProps = {
    serviceName: 'facebook',
  }

  render(){
    const { serviceName } = this.props
    return(
      <Wrapper jcc>
        <LogoBox backgroundColor={this.getServiceColor()}>
          {this.getIcon()}
        </LogoBox>
        <Text>Find Friends in {this.capitalize(serviceName)}</Text>
      </Wrapper>
    )
  }

  getIcon(){
    const { serviceName } = this.props
    switch (serviceName) {
      case 'facebook': return <IconFacebook />
      case 'twitter': return <IconTwitter />
      case 'email': return <IconEmail />
    }
  }

  getServiceColor(){
    const { serviceName } = this.props
    return colors[serviceName]
  }

  capitalize( string: string ){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const colors = {
  facebook: m.colors.facebook,
  twitter: m.colors.twitter,
  email: m.colors.email,
}

const Text = styled.div` ${m.t2} ${s.asc} `
const Wrapper = styled(Row)` ${m.box} padding:12px; transition:200ms;
  &:hover ${Text}{ color:${m.colors.brand}; }
`
  const LogoBox = styled.div`
    width:36px; height:36px; margin-right:12px;
    background-color: ${p => p.backgroundColor }; border-radius:4px; ${s.jcc} ${s.aic}
  `

  const icon = css` color:white; width:24px; height:24px;  `
  const IconTwitter = styled(FaTwitterSquare)` ${icon} `
  const IconFacebook = styled(FaFacebookSquare)` ${icon} `
  const IconEmail = styled(MdEmail)` ${icon} `
