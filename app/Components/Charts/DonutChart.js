// @flow
// Highcharts Treemap docs: http://api.highcharts.com/highcharts/series%3Ctreemap%3E
import React, { Component } from 'react'

// HighCharts Imports
import ReactHighcharts from 'react-highcharts'

export default class DonutChart extends Component {

  static defaultProps = {
    percent: 20,
    color: 'orange',
  }

  chart = null

  render(){
    const { percent, color } = this.props

    const data = [
      { y: percent, color: color },
      { y: 100-percent, color: m.colors.black10 },
    ]

    const config = { ...CONFIG }
    config.series[0].data = data

    return(
      <Wrapper>
        <ChartWrapper>
          <ReactHighcharts
            ref={ ref => this.chart = ref }
            config={config}
          />
        </ChartWrapper>
        {/* <Percent>{percent}%</Percent> */}
      </Wrapper>
    )
  }


}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const size = 80
const Wrapper = styled.div` width:200px; height:200px; position:relative; `

const ChartWrapper = styled.div` width:100%; height:100%; position:absolute; `

  const Percent = styled.div` width:100%; position:absolute; top:${size/2}; ${s.tac}
    color:${m.colors.black}
  `


const linesColor = '#4B555D'
const textColor = '#BCC0C2'

const CONFIG = {
  title: null,
  credits: { enabled: false },
  chart: {
    width: 200,
    height: 200,
    type: 'pie',
    borderColor: 'transparent',
    margin: [0,0,0,0],
  },
  plotOptions: {
    series: {
      animation: { duration: 200 },
      states: { hover: { enabled: false } },
    },
    pie: {
      borderColor:'transparent',
      scliedOffset: 0,
      size: '100%',
      dataLabels: {
          enabled: false
      }
    },
  },
  legend: { enabled: false },
  tooltip: { enabled: false },
  chart: { backgroundColor: 'transparent', borderRadius: 8, },
  series: [
    {
      type: 'pie',
      innerSize: '75%',
      data: [],
      dataLabels: { enabled: false },
    }
  ],
}
