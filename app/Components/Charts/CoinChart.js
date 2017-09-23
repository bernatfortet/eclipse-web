// @flow
import React, { Component } from 'react'

import { AreaChart, Area } from 'recharts';

import { BTC } from 'utils/chartData'

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
]

export default class CoinChart extends Component {

  static defaultProps = {
    obj: '',
  }

  componentWillMount(){

  }

  render(){
    const width = 1245
    const height = 280
    return(
      <Wrapper>
        <AreaChart width={width} height={height} data={data} margin={{top: 20, right:0, left:0, bottom:0}}>
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1B12E3" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <clipPath id="circleView">
              <circle cx="250" cy="125" r="125" fill="#FFFFFF" />
            </clipPath>
          </defs>
          <Area type='monotone' dataKey='uv' stroke='#1B12E3' fill='url(#colorUv)' />
          {this.renderImage()}

        </AreaChart>
      </Wrapper>
    )
  }

  renderImage(){
    const imageUrl = 'https://pbs.twimg.com/profile_images/868501388636045312/hRzmxxvG_400x400.jpg'
    const size = 24
    const maskId = 'circleView'

    return <svg dangerouslySetInnerHTML={{__html: `<image width='${size}' height='${size}' fill='#90' stroke='#000' style='cursor:pointer' xlink:href="${imageUrl}" clip-path='url(#${maskId})'/>`}} />
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` width:100%; height:280px; background:white;` // box-shadow:inset 0 -5px 50px 0 rgba(0,0,0,0.07);
