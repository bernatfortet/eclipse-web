// @flow
import React, { Component } from 'react'

import { friends } from 'utils/mockData'

import SelectableUsersList from 'components/Connect/SelectableUsersList'

export default class FriendsStep extends Component {

  static defaultProps = {
    friends: friends,
  }

  render(){
    const { friends } = this.props
    return(
      <Wrapper>
        <SelectableUsersList users={friends}/>
      </Wrapper>
    )
  }


}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  `
