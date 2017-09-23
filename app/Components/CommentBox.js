// @flow
import React, { Component } from 'react'
import Textarea from 'react-textarea-autosize'

import Avatar from 'components/Avatar'
import Button from 'components/Button'
import Sentiment, { SENTIMENT_TYPES } from 'components/Sentiment'


const MAX_CHARACTERS = 140
const MIN_CHARACTERS_ALERT = 20

export default class CommentBox extends Component {

  textarea = {}

  state = {
    text: '',
    isActive: false,
    selectedSentiment: SENTIMENT_TYPES.BUY,
  }

  render(){
    const { text, isActive } = this.state

    return(
      <Wrapper onClick={this.onFocusCommentTextarea}>
        <Avatar />
        <Content>
          <CommentTextarea
            ref={ ref => this.textarea = ref }
            placeholder="What's going on?"
            onFocus={this.onFocusCommentTextarea}
            onBlur={this.onBlurCommentTextarea}
            onChange={this.onChangeCommentTextarea}
            isActive={isActive}
            value={text}
          />
          {this.renderInfo()}
        </Content>
      </Wrapper>
    )
  }

  onChangeCommentTextarea = ( event: Object ) => {
    const text = event.currentTarget.value
    this.setState({ text: text })
  }

  onFocusCommentTextarea = () => {
    this.setState({ isActive: true })
  }

  onBlurCommentTextarea = () => {
    const { text } = this.state
    if( text.trim().length == 0 )
      this.setState({ isActive: false })
  }

  onSendComment = () => {
    console.log(`here` )
    const commentText = this.state.text
    //TODO send comment to DB

    this.setState({ text: '' })
  }

  renderInfo(){
    const { isActive } = this.state
    if( !isActive ) return null
    const ramainingCharacters = this.getRaminingCharacters()
    return(
      <FocusInfo jcsb aic>
        {this.renderSentiments()}
        <Row>
          <RamainingCharacters characters={ramainingCharacters}>{ramainingCharacters}</RamainingCharacters>
          <CommentButton onClick={this.onSendComment}>Comment</CommentButton>
        </Row>
      </FocusInfo>
    )
  }

  renderSentiments(){
    const { selectedSentiment } = this.state
    const BUY = SENTIMENT_TYPES.BUY
    const SELL = SENTIMENT_TYPES.SELL
    const HODL = SENTIMENT_TYPES.HODL
    return(
      <SentimentButtons vCenter>
        <Sentiment type={BUY} isActive={selectedSentiment == BUY} onClick={() => this.onClickSentiment(BUY) } />
        <Sentiment type={SELL} isActive={selectedSentiment == SELL} onClick={() => this.onClickSentiment(SELL) } />
        <Sentiment type={HODL} isActive={selectedSentiment == HODL} onClick={() => this.onClickSentiment(HODL) } />
      </SentimentButtons>
    )
  }

  onClickSentiment = ( sentimentType: string ) => {
    this.setState({ selectedSentiment: sentimentType })
  }

  getRaminingCharacters(){
    const { text } = this.state
    const ramainingCharacters = MAX_CHARACTERS - text.trim().length
    return ramainingCharacters
  }
}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Row)` margin-bottom:12px; padding:16px; ${m.rounding} ${m.border} background-color:white; `
  const Content = styled(Column)` flex:1; margin-left:16px; `

  const activeTextarea = css``

  const CommentTextarea = styled(({ isActive, ...rest }) => <Textarea {...rest} />)`
    width:100%; margin-top:8px;
    font-size:20px; color:${m.colors.black};
    border:0; resize: none; outline:0; overflow-y:hidden;
    &::placeholder{ color:${m.colors.black50}; }
    ${p => p.isActive ? activeTextarea : '' }
  `

  // Focus Info

  const FocusInfo = styled(Row)` margin-top:12px; `
    const SentimentButtons = styled(Row)`
      & > * { margin-right:12px; }
    `
    const RamainingCharacters = styled.div` ${s.jcc} ${s.aic} margin-right:12px;
      color:${p => p.characters <= MIN_CHARACTERS_ALERT ? m.colors.red : ''};
    `
    const CommentButton = styled(Button)` ${s.unselectable}  `
