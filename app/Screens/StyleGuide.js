// @flow
import React, { Component } from 'react'

import MdLocation from 'react-icons/lib/md/location-on'

import CoinBadge from 'components/CoinBadge'
import Button from 'components/Button'
import CoinLogo from 'components/CoinLogo'
import CoinTracked from 'components/CoinTracked'
import Comment from 'components/Comment'
import CommentBox from 'components/CommentBox'
import FollowButton from 'components/FollowButton'
import FollowInfluencerCard from 'components/FollowInfluencerCard'
import FollowUserCard from 'components/FollowUserCard'
import GrowthSidebar from 'components/GrowthSidebar'
import HoldingsTable from 'components/HoldingsTable'
import Sentiment from 'components/Sentiment'
import SourceCard from 'components/SourceCard'
import SparkVolumeLine from 'components/SparkVolumeLine'
import SymbolSearchBox from 'components/SymbolSearchBox'
import UserProfileData from 'components/UserProfileData'
import FindFriendsButton from 'components/FindFriendsButton'


export default class StyleGuide extends Component {

  static defaultProps = {
    obj: '',
  }

  render(){
    return(
      <Wrapper>
        {this.renderComponents()}
        {this.renderPrimitives()}
        {this.renderAtoms()}
      </Wrapper>
    )
  }

  renderPrimitives(){
    return(
      <Section aifs>
        <StylesTitle>Primitives</StylesTitle>

        <Row>
          {this.renderColors()}
        </Row>
      </Section>
    )
  }

  renderColors(){
    return Object.keys(m.colors).map( (key, index) => {
      return <Color key={index} color={m.colors[key]} />
    })
  }

  renderAtoms(){
    return(
      <Section aifs>
        <StylesTitle>Atoms</StylesTitle>
      </Section>
    )
  }

  renderComponents(){
    return(
      <Section aifs>
        <CommentBox />
        <Comment />
        <FollowButton />
        <FollowInfluencerCard />
        <FollowUserCard />
        <FindFriendsButton />
        <GrowthSidebar />
        <HoldingsTable />
        <Sentiment />
        <SourceCard />
        <SparkVolumeLine />
        <SymbolSearchBox />
        <UserProfileData />
        <StylesTitle>Components</StylesTitle>
        <CoinBadge />
        <Button />
        <CoinLogo />
        <CoinTracked />
      </Section>
    )
  }

}


// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'


const Wrapper = styled.div` padding:40px; overflow-y:auto; background:rgba(0,0,0,0.1);
  & > ${Column} > div { margin: 16px;}
`

const RowSeparator = styled(Row)` & > * { margin-right:28px;} `
const ColumnSeparator = styled(Column)` & > * { margin-bottom:28px; } `

const Section = styled(ColumnSeparator)` margin:20px; padding:20px; background: white; border-radius:8px;  `


const StylesTitle = styled.div`
  width:100%; padding-bottom:10px;
  font-family:'Courier'; font-size:20px; font-weight:bold; letter-spacing:-1px; opacity:0.25;
  border-bottom:2px solid rgba(0,0,0,0.15);
`

const Color = styled.div` width:50px; height:50px; margin-right:8px; background:${p => p.color }; border-radius:4px;  `
