// @flow
import React, { Component } from 'react'

import MdThumbUp from 'react-icons/lib/md/thumb-up'
import MdBubble from 'react-icons/lib/md/chat-bubble-outline'

export default class StatsButtons extends Component {

  static defaultProps = {
    claps: 54,
    replies: 44,
  }

  render(){
    const { claps, replies } = this.props
    return(
      <Wrapper>
        <Stat>
          <ClapIcon />
          <Value>{claps}</Value>
        </Stat>

        <Stat jcsb aic>
          <ReplyIcon />
          <Value>{replies}</Value>
        </Stat>

      </Wrapper>
    )
  }
}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Row)`  `

const icon = css` margin-right:4px;`
const hoveredIcon = css` color:${m.colors.brand}; `

const Stat = styled(Row)` margin-right:24px; color:${m.colors.black40}; ${s.anchor}
  & {ClapIcon}:hover{ ${hoveredIcon} }
  & {ReplyIcon}:hover{ ${hoveredIcon} }
`
  const ClapIcon = styled(MdThumbUp).attrs({ size:20 })` ${m.icon} ${icon} `
  const ReplyIcon = styled(MdBubble).attrs({ size:20 })` ${m.icon} ${icon} `

  const Value = styled.div` font-size:14px; line-height:20px; `
