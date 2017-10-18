// @flow
import React, { Component } from 'react'
import MdAdd from 'react-icons/lib/md/add-circle-outline'


import { exchanges } from 'utils/mockData'

export default class ExchangeCard extends Component {

  static defaultProps = {
    exchange: exchanges['poloniex'],
  }

  render(){
    const { exchange } = this.props
    return(
      <Wrapper vCenter>
        <Brand vCenter backgroundColor={exchange.color}>
          <BrandLogo src={`/images/${exchange.name}`} />
        </Brand>
        <AddIcon />
      </Wrapper>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const AddIcon = styled(MdAdd).attrs({size:48})`

`

const Wrapper = styled(Row)` max-width:50%; flex:1; margin:8px 0 0 8px; ${m.box} padding:12px;
  &:hover ${AddIcon}{ color:${m.colors.black};  }

`

  const Brand = styled(Row)` margin-right:48px; background-color:${p => p.backgroundColor}; ${m.rounding} `



  const BrandLogo = styled.div` width:253px; height:90px; ${m.rounding} `
