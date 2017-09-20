// @flow
import React, { Component } from 'react'

import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'

export default class FindFriendsButton extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    const { service } = this.props
    return(
      <Wrapper>
        <LogoBox>
          <FaFacebookSquare />
        </LogoBox>
        <Text>Find Friends in {service}</Text>
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  ${m.box} padding:12px; `
  const LogoBox = styled.div` background-color:red; `

  const Text = styled.div` ${m.t1}  `
