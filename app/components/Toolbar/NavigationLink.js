// @flow
import React, { Component } from 'react'

import { NavLink as LinkRouter } from 'react-router-dom'

export default class Link extends Component {

  render(){
    return <LinkWithStyle {...this.props} >
      {this.props.children}
    </LinkWithStyle>
  }
}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'


const active = css` color:white !important; background:rgba(255,255,255,0.08);
  & > * { color:white !important; }
`

const LinkWithStyle = styled(LinkRouter)`
  ${s.flxRow} ${s.aic}
  ${m.tLink} color:${m.colors.white60} !important; transition:400ms;
  & > * {  transition:400ms; }

  &:hover{ ${active} }
  &.active{ ${active} }

 `
