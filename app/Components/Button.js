// @flow
import React, { Component } from 'react'

export default class ClassName extends Component {

  static defaultProps = {
    backgroundColor: m.colors.brand,
    children: 'Press Button',
    className: '',
    secondary: null,
    big: null,
    white: null,
    onClick: () => {}
  }

  render(){
    const { backgroundColor, className, secondary, onClick, big, white } = this.props
    return(
      <Wrapper
        backgroundColor={backgroundColor}
        className={className}
        secondary={secondary ? true : false}
        big={big ? true : false}
        white={white ? true : false}
        onClick={onClick}
      >
        {this.props.children}
      </Wrapper>
    )
  }
}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const hover = css` background-color:${m.colors.black}; transition: 100ms background-color;`
const big = css` padding:16px 36px; font-size:20px; font-weight:500; background-color:${m.colors.black}; ${s.jcc} border:2px solid transparent;
  &:hover{ background-color: white; color:${m.colors.black}; border:2px solid ${m.colors.black};}
`
const white = css` padding:20px 36px; background-color:white; font-size:24px; color:${m.colors.brand}; box-shadow: 0 7px 25px 0 rgba(27,18,227,0.46); transition:300ms;
  &:hover{ background-color:white; transform:translateY(-3px); transition:600ms; box-shadow: 0 7px 45px 2px rgba(27,18,227,1); }
`
const secondary = css` background-color:transparent; border:2px solid ${m.colors.black}; color:${m.colors.black};
  &:hover{ color:white; }
`


const Wrapper = styled.div`
  padding:8px 16px; border-radius:50px;
  background-color:${p => p.backgroundColor ? p.backgroundColor : m.colors.brand };
  color:white; font-weight:600;
  &:hover{ ${hover} } transition: 200ms background-color;
  ${s.anchor}
  ${p => p.secondary ? secondary : '' }
  ${p => p.big ? big : '' }
  ${p => p.white ? white : '' }
`
