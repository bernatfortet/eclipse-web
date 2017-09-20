// @flow
import React, { Component } from 'react'

import Button from 'components/Button'

export default class FollowButton extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    return(
      <Button secondary>
        + Follow
      </Button>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  `
