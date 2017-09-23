// @flow
import React, { Component } from 'react'

import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebook from 'react-icons/lib/fa/facebook-square'
import FaLinkedin from 'react-icons/lib/fa/linkedin-square'

export default class SocialButton extends Component {

  static defaultProps = {
    socialAccounts: {
      facebook: 'https://www.facebook.com/vinnylingham',
      twitter: 'https://twitter.com/VinnyLingham',
      linkedin: 'https://www.linkedin.com/in/vinnylingham',
    },
  }

  render(){
    return(
      <Wrapper>
        {this.renderButtons()}
      </Wrapper>
    )
  }

  renderButtons(){
    const { socialAccounts } = this.props
    return Object.keys(socialAccounts).map( key => {
      const account = socialAccounts[key]
      return <Link key={key}>{this.getSocialIcon(key)}</Link>
    })
  }

  getSocialIcon( key: string ){
    switch (key) {
      case 'facebook': return <FacebookIcon />
      case 'twitter': return <TwitterIcon />
      case 'linkedin': return <LinkedinIcon />
    }
  }
}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Row)` margin-left:-4px; `

  const Link = styled.a`  `

  const icon = css`
    margin-right:8px; padding:4px; color:${m.colors.black80}; font-size:20px; ${s.anchor}
    &:hover{ color:${m.colors.black};  }
  `
  const FacebookIcon = styled(FaFacebook)` ${icon} `
  const TwitterIcon = styled(FaTwitter)` ${icon} `
  const LinkedinIcon = styled(FaLinkedin)` ${icon} `
