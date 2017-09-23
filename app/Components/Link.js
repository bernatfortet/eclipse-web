// @flow
import React, { Component } from 'react'

import { Link as LinkRouter } from 'react-router-dom'

export default class Link extends Component {

  render(){
    return <LinkWithStyle {...this.props} >
      {this.props.children}
    </LinkWithStyle>
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const LinkWithStyle = styled(LinkRouter)` ${m.tLink} `
