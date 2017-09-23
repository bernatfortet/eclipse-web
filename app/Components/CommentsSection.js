// @flow
import React, { Component } from 'react'

import CommentBox from 'components/CommentBox'
import CommentsList from 'components/CommentsList'

import { comments } from 'utils/mockData'

import MdTrending from 'react-icons/lib/md/whatshot'
import MdTime from 'react-icons/lib/md/access-time'
import MdFilter from 'react-icons/lib/md/filter-list'

export default class CommentsSection extends Component {

  static defaultProps = {
    comments: comments,
  }

  render(){
    return(
      <Wrapper>
        <CommentBox />

        <CommentsFiltering>

          <Filter isActive={true}>
            <TrendingIcon />
            Trending
          </Filter>

          <Filter>
            <TimeIcon />
            Recent
          </Filter>

          <Filter>
            <FilterIcon />
            By Coin
          </Filter>

        </CommentsFiltering>

        <CommentsList />
      </Wrapper>
    )
  }

}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` max-width:580px; `


  const CommentsFiltering = styled(Row)` margin:8px 0 8px; ${s.jcsb} `

  // Filter
    const icon = css` width:20px; height:20px; margin-right:8px; ${m.colors.black50} `

    const TrendingIcon  = styled(MdTrending)` ${icon} `
    const TimeIcon      = styled(MdTime)`     ${icon} `
    const FilterIcon    = styled(MdFilter)`   ${icon} `

    const active = css` color:${m.colors.black}; `

  const Filter = styled(Row)` padding:8px 16px; color:${m.colors.black50}; font-weight:500; ${s.anchor} ${m.rounding}
    &:hover{ ${active} background-color:${m.colors.black05}; }
    ${p => p.isActive ? active : ''}
  `
