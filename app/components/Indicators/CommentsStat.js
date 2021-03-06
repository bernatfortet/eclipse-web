// @flow
import React, { Component } from 'react'

import MdBubble from 'react-icons/lib/md/chat-bubble-outline'

export default class Comments extends Component {

  static defaultProps = {
    value: 0,
  }

  render(){
    const { value } = this.props
    return(
      <Wrapper>
        <CommentsIcon />
        <Value>{value}</Value>
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Row)`  `

const CommentsIcon = styled(MdBubble).attrs({ size:14 })` margin-right:4px; `

const Value = styled.div` font-size:12px; `
