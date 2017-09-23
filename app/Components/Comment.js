// @flow
import React, { Component } from 'react'

import moment from 'moment'

import Avatar from 'components/Avatar'
import StatsButtons from 'components/StatsButtons'
import { Link } from 'react-router-dom'

export default class Comment extends Component {

  static defaultProps = {
    comment: {
      user: {
        name: 'Vinny Lingham',
        userName: 'vinnylingham',
        imageUrl: 'https://pbs.twimg.com/profile_images/868501388636045312/hRzmxxvG_400x400.jpg'
      },
      text: 'With China banning ICO’s I see it as an opportune time to jump in a purchase BTC. Some people might feel otherwise but I think this is the time to go all in! ',
      claps: 55,
      replies: 12,
      sentiment: 'buy',
      timeStamp: 1505925992919,
      priceStamp: 4122,
      symbolStamp: 'BTC',
    },
  }

  render(){
    const { comment } = this.props

    const timeStamp = '1 d' //new Date(comment.timeStamp).toString()
    const priceStamp = comment.priceStamp
    const link = { to: `/profile/${comment.user.userName}` }

    return(
      <Wrapper>
        <Link {...link} >
          <Avatar size={64} imageUrl={comment.user.imageUrl} />
        </Link>
        <Content>
          <Row jcsb>
            <UserName {...link} >{comment.user.name}</UserName>
            <Stamps>{timeStamp} - {priceStamp}</Stamps>
          </Row>
          <Text>{comment.text}</Text>
          <Stats>
            <StatsButtons claps={comment.claps} replies={comment.replies} />
          </Stats>
        </Content>

      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Row)` padding:16px; ${m.border} border-color:transparent; ${m.rounding}
  &:hover{ ${m.border} background-color:white;}
`

const Content = styled.div` margin-left:16px; `

  const Stamps = styled.div` color:${m.colors.black50}; line-height:24px; `

  const UserName = styled(Link)` ${m.t2} ${m.tLink} margin-bottom:4px;`
  const Text = styled.div` ${m.tBody} margin-bottom:8px; `

  const Stats = styled(Row)`
    & > * { margin-right:16px; }
  `
