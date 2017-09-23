// @flow
import React, { Component } from 'react'
import MdSearch from 'react-icons/lib/md/search'

export default class SearchBox extends Component {

  static defaultProps = {
    obj: '',
  }

  state = {
    isActive: false,
    query: '',
  }

  render(){
    const { isActive, query } = this.state
    return(
      <Wrapper isActive={isActive}>
        <SearchIcon />
        <Input
          placeholder='Find Symbol'
          value={query}
          onChange={this.onChangeSearchInput}
          onFocus={this.onFocusSearchInput}
          onBlur={this.onBlurSearchInput}
        />
      </Wrapper>
    )
  }

  onChangeSearchInput = ( event: Object ) => {
    const query = event.currentTarget.value
    this.setState({ query: query })
  }

  onFocusSearchInput = () => {
    this.setState({ isActive: true })
  }

  onBlurSearchInput = () => {
    const { query } = this.state
    this.setState({ isActive: false, query: '' })
  }

}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Input = styled.input`
  width:100%; background:transparent;
  color:${m.colors.black}; font-size:14px;
  border:0; outline:0;
  &::placeholder{ color:${m.colors.white50};  }
  &:focus::placeholder{ color:${m.colors.black60}; }
`
const SearchIcon = styled(MdSearch)` width:20px; height:20px; color:${m.colors.white50}; margin-right:4px; `

const active = css` background:white !important; box-shadow: 0 4px 15px 0 rgba(13,18,28,0.60), 0 0 1px 1px rgba(13,18,28,0.60);
  & ${SearchIcon} { color: ${m.colors.black60}; }
`

const Wrapper = styled(Row)`
  margin:0 12px 8px; padding:8px 8px;
  background-color:${m.colors.white10};
  box-shadow: 0 0 1px 1px rgba(13,18,28,0.05), 0 6px 10px 0 rgba(13,18,28,0.10);
  border-radius:8px;
  transition:200ms;
  &:hover{ background-color:${m.colors.white20}; }
  ${p => p.isActive ? active : ''}
`
