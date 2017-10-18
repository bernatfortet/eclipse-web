// @flow
import React, { Component } from 'react'
import MdThumbUp from 'react-icons/lib/md/thumb-up'

export default class ClapStat extends Component {

  static defaultProps = {
    value: 0,
  }

  render(){
    const { value } = this.props
    return(
      <Wrapper vCenter>
        <ClapIcon />
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
const ClapIcon = styled(MdThumbUp).attrs({ size:14 })` ${m.icon} margin-right:4px; `

const Value = styled.div` font-size:12px; `
