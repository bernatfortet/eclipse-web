// @flow
import React, { Component } from 'react'
import Avatar from 'components/Avatar'

import { users, comments } from 'utils/mockData'

import ClapStat from 'components/Indicators/ClapStat'
import CommentsStat from 'components/Indicators/CommentsStat'

import MdCheck from 'react-icons/lib/md/check-circle'
import MdUnchecked from 'react-icons/lib/md/radio-button-unchecked'

export default class SelectableUserCard extends Component {

  static defaultProps = {
    user: {
      ...users['vinnylingham'],
      comment: { ...comments[0] }
    },
  }

  render(){
    const { user } = this.props
    return(
      <Wrapper>
        <Column hCenter style={{marginRight:16}}>
          <Avatar size={64} imageUrl={user.imageUrl} />
          <ClapStat value={321} />
          <CommentsStat value={12} />
        </Column>

        <Column>
          <m.UserName>{user.name}</m.UserName>
          <LastComment>Last Comment:</LastComment>
          <Comment>{user.comment.text}</Comment>
        </Column>

        {this.renderCheckIcon()}

      </Wrapper>
    )
  }

  renderCheckIcon(){
    const { following } = this.props.user
    if( following )
      return <CheckedIcon />
    else
      return <UncheckedIcon />
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'


const CheckedIcon = styled(MdCheck).attrs({ size:48 })` min-width:32px; color:${m.colors.green}; `
const UncheckedIcon = styled(MdUnchecked).attrs({ size:48 })` min-width:32px; color:${m.colors.black40}; `

const Wrapper = styled(Row)` max-width:568px; padding:16px; ${s.ass} ${m.box}
  &:hover ${CheckedIcon}{ color: ${m.colors.green};  }
  &:hover ${UncheckedIcon}{ color: ${m.colors.black70};  }
`
  const LastComment = styled.div` color:${m.colors.black50};  `

  const Comment = styled.div`  `
