// @flow
import React, { Component } from 'react'

import Logo from 'components/Logo'
import FriendsStep from 'components/Connect/FriendsStep'
import InfluencersStep from 'components/Connect/InfluencersStep'
import AccountsStep from 'components/Connect/AccountsStep'
import Button from 'components/Button'

const STEPS = {
  '1': {
    title: 'Connect with your friends',
    subtitle: 'We’ve found 10 friends in eclipse!',
  },
  '2': {
    title: 'Follow top crypto-influencers',
    subtitle: 'We recommend you these 10 influencers',
  },
  '3': {
    title: 'Import your balances',
    subtitle: 'Connect to the following exchanges and wallets',
  }
}

export default class Connect extends Component {

  state = {
    currentStep: 1,
  }

  render(){
    return(
      <Wrapper>
        <Logo dark />
        <Row jcsb vCenter style={{width:'100%'}}>
          {this.renderTitle()}
          {this.renderNextStep()}
        </Row>
        {this.renderStep()}
      </Wrapper>
    )
  }

  renderStep(){
    const { currentStep } = this.state
    switch (currentStep) {
      case 1: return <FriendsStep />
      case 2: return <InfluencersStep />
      case 3: return <AccountsStep />
    }
  }

  renderTitle(){
    const { currentStep } = this.state
    const title = STEPS[currentStep].title
    const subtitle = STEPS[currentStep].subtitle

    return(
      <Column>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Column>
    )
  }

  renderNextStep(){
    const { currentStep } = this.state
    if( currentStep >= 3 ) return null
    return(
      <Column aife>
        <Step>Step {currentStep} of 3</Step>
        <Button onClick={this.onNextStep}>Continue</Button>
      </Column>
    )
  }

  onNextStep = () => {
    const { currentStep } = this.state
    this.setState({ currentStep: currentStep+1 })
  }

  renderHeader(){
    return(
      <Row jcsb>

      </Row>
    )
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'
import * as h from 'styles/homescreen'

const Wrapper = styled.div` width:100%; max-width:1000px; margin:0 auto; `

  const Step = styled.div` color:${m.colors.black60}; margin-bottom:12px; `
  const Title = styled(h.H1)` margin-top:60px; color:${m.colors.brand}; `
  const SubTitle = styled(m.H2)` margin-bottom:60px; `
