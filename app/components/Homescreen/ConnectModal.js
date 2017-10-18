// @flow
import React, { Component } from 'react'

import Modal from 'components/Modal'
import Link from 'components/Link'
import FaFacebook from 'react-icons/lib/fa/facebook-square'

import { lighten } from 'polished'

export default class ConnectModal extends Component {

  static defaultProps = {
    isSignUp: false,
  }

  render(){
    const { isSignUp } = this.props
    const title = isSignUp ? 'Sign Up' : 'Log In'
    const buttonText = isSignUp ? 'Continue' : 'Log In'
    return(
      <Modal>
        <Sheet hCenter>

          <Title>{title}</Title>

          <Input placeholder='Your Email' type='email' />
          <Input placeholder='Your Password' type='password' />

          <Button>
            {buttonText}
          </Button>
          <Or>Or</Or>
          <ButtonFacebook >
            <IconFacebook />
            Continue With Facebook
          </ButtonFacebook>

          {this.renderFooter()}

        </Sheet>
      </Modal>
    )
  }

  renderFooter(){
    const { isSignUp } = this.props
    if(isSignUp)
      return(
        <Terms>
          By continuing, you agree to Eclipse’s Terms of Service & Privacy Policy
        </Terms>
      )
    else
      return(
        <Link to='/forgot/'>
          <ForgotPassword>Forgot your password?</ForgotPassword>
        </Link>
      )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Sheet = styled(Column)` max-width:320px; padding:36px; background:white; border-radius:20px; box-shadow: 0 2px 47px 0 rgba(0,0,0,0.50);  `

  const Title = styled.div` font-size:36px; font-weight:600; margin-bottom:40px; `
  const Input = styled.input`
    flex:1; padding:20px; margin-bottom:8px; ${s.ass}
    background:${m.colors.black05}; ${m.rounding} border:0; outline:0;
    ${m.t1}
    &::placeholder{ color:${m.colors.black40}; }
    &:hover::placeholder{ color:${m.colors.black70}; }
    &:hover{}
    &:active{}
  `
  const Button = styled.div`
    flex:1; margin-top:12px; padding:20px; ${s.ass} ${s.jcc} ${s.aic} ${s.anchor}
    background-color:${m.colors.black}; ${m.rounding}
    ${m.t1} color:white;
    &:hover{ background:${lighten(0.08, m.colors.black)} }
  `

  const Or = styled.div` margin-top:12px; ${m.t1} color:${m.colors.black50};  `

  const ButtonFacebook = styled(Button)` background:${m.colors.facebook}; ${s.jcfs}
    &:hover{ background:${lighten(0.08, m.colors.facebook)} }
  `
    const IconFacebook = styled(FaFacebook)` color:white; margin-right:8px; `

  const Terms = styled.div` margin-top:24px; font-size:14px; color:${m.colors.black40}; ${s.jcc} `
  const ForgotPassword = styled.div` margin-top:24px;  ${m.t3}
    &:hover{ opacity:0.6; }
  `
