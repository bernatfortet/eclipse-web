// @flow
// Adapted from: https://codepen.io/zeroskillz/pen/mPmENy
import React, { Component } from 'react'

export default class DonutChart extends Component {

  static defaultProps = {
    value:25,
    size:116,
    strokeWidth:26,
    color: '#F9A440',
  }

  render() {
    const { value, size, strokeWidth, color } = this.props
    const halfsize = (size * 0.5)
    const radius = halfsize - (strokeWidth * 0.5)
    const circumference = 2 * Math.PI * radius
    const strokeval = ((value * circumference) / 100)
    const dashval = (strokeval + ' ' + circumference)

    const trackstyle = {strokeWidth: strokeWidth}
    const indicatorstyle = {strokeWidth: strokeWidth, strokeDasharray: dashval}
    const rotateval = 'rotate(0 '+halfsize+','+halfsize+')'

    return (
      <Chart width={size} height={size} >
        <Track r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle}/>
        <Indicator strokeColor={color} r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} />
        <Text x={halfsize} y={halfsize} style={{textAnchor:'middle'}} >
          <PercentValue>{value}</PercentValue>
          <Percent>%</Percent>
        </Text>
      </Chart>
    )
  }
}


// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Chart = styled.svg`   margin: 0 auto; border-radius: 50%; display: block; `
  const Track = styled.circle` fill:transparent; stroke:${m.colors.black10}; stroke-width:5;`
  const Indicator = styled.circle`
    fill:transparent; stroke:${p => p.strokeColor}; stroke-width:5; stroke-dasharray:0 10000;
    transition: stroke-dasharray .3s ease;
  `

  const Text = styled.text` fill: #607580; `
    const PercentValue = styled.tspan` font-size:22px; `
    const Percent = styled.tspan` font-size:14px; `
