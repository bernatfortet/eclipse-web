// @flow
import React, { Component } from 'react'

export default class ClassName extends Component {

  componentDidMount(){
    this.removeCredits()
  }

  render(){
    return this.props.children
  }

  removeCredits(){
    const credits = document.getElementsByClassName('highcharts-credits')
    if( credits[0] && credits[0].parentNode )
      credits[0].parentNode.removeChild( credits[0] )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  `
