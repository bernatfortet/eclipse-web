// @flow
import React, { Component } from 'react'

import Comment from 'components/Comment'

import { comments } from 'utils/mockData'

export default class ClassName extends Component {

  static defaultProps = {
    comments: comments,
  }

  render(){
    return(
      <Wrapper>
        {this.renderComments()}
      </Wrapper>
    )
  }

  renderComments(){
    const { comments } = this.props
    return Object.keys(comments).map( key => {
      const comment = comments[key]
      return <Comment key={key} comment={comment} />
    })
  }

}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` margin-top:12px; `
