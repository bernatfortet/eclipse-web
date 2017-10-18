// @flow
import React, { Component } from 'react'

import SelectableUserCard from 'components/Connect/SelectableUserCard'

export default class SelectableUsersList extends Component {

  static defaultProps = {
    users: [],
  }

  render(){
    return(
      <List>
        {this.renderSelectableUsers()}
      </List>
    )
  }

  renderSelectableUsers(){
    const { users } = this.props
    return Object.keys(users).map( key => {
      const user = users[key]
      return <SelectableUserCard key={key} user={user} />
    })
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  `


const List = styled(Column)`
  & > * { margin-bottom:12px; }
`
