// @flow
import React, { Component } from 'react'
import MdAdd from 'react-icons/lib/md/add-circle-outline'


export default class WalletCard extends Component {

  static defaultProps = {
    wallet: {},
  }

  render(){
    return(
      <Wrapper>WalletCard</Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Row)`  `

export const AddIcon = styled(MdAdd)` `
