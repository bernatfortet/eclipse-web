// @flow
import React, { Component } from 'react'

export default class ClassName extends Component {

  static defaultProps = {
    backgroundColor: m.colors.brand,
    children: 'Press Button',
    className: '',
    secondary: null,
  }

  render(){
    const { backgroundColor, className, secondary } = this.props
    return(
      <Wrapper backgroundColor={backgroundColor} className={className} secondary={true} >
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
const secondary = css` background-color:white; border:2px solid ${m.colors.black}; color:${m.colors.black};
  &:hover{ color:white; }
`

const Wrapper = styled.div`
  padding:8px 16px; border-radius:50px;
  background-color:${p => p.backgroundColor ? p.backgroundColor : m.colors.brand };
  color:white; font-weight:600;
  &:hover{ ${hover} } transition: 200ms background-color;
  ${s.anchor}
  ${p => p.secondary ? secondary : '' }
`
