// @flow
import React, { Component } from 'react'

import NavigationLink from 'components/Toolbar/NavigationLink'

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

const Wrapper = styled.div``

  const icon = css` width:20px; height:20px; margin-right:8px; `

  const ItemLink = styled(NavigationLink)`
    padding:12px 12px; ${s.aic} ${m.tNav}
  `

    const DashboardIcon = styled(MdAccountBalanceWallet)` ${icon} `
    const HoldingsIcon = styled(MdInsertChart)` ${icon} `
