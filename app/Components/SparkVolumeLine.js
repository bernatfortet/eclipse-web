// @flow
import React, { Component } from 'react'

import Area from 'components/Area'

export default class SparkVolumeLine extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    const areaProps = {
      margin: { top:0, left:0, right:0, bottom:0 },
      height: 44,
      width: 160,
    }
    return(
      <Wrapper>
        <Area {...areaProps} />
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  `
