// @flow
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import MdAccountBalanceWallet from 'react-icons/lib/md/account-balance-wallet'
import MdInsertChart from 'react-icons/lib/md/insert-chart'


export default class Navigation extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    return(
      <Wrapper>
        <ItemLink to='/dashboard'>
          <DashboardIcon />
          Dashboard
        </ItemLink>
        <ItemLink to='/holdings'>
          <HoldingsIcon />
          Holdings
        </ItemLink>
      </Wrapper>
    )
  }
}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` padding:12px; `

  const icon = css` width:20px; height:20px; color:${m.colors.white60}; margin-right:8px; `

  const ItemLink = styled(Link)` padding:12px 0; color:${m.colors.white60}; ${s.aic} font-size:16px; font-weight:400; ${s.anchor} transition:200ms;
  text-decoration:none;
    &:hover{ color:white;  transition:400ms; }
    &:hover > *{ color:white;  transition:400ms; }
  `

    const DashboardIcon = styled(MdAccountBalanceWallet)` ${icon} `
    const HoldingsIcon = styled(MdInsertChart)` ${icon} `
