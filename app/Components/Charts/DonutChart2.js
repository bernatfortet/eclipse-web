// @flow
// Highcharts Treemap docs: http://api.highcharts.com/highcharts/series%3Ctreemap%3E
import React, { Component } from 'react'

// HighCharts Imports
import ReactHighcharts from 'react-highcharts'
import HighchartsTreemap from 'highcharts-treemap'
HighchartsTreemap(ReactHighcharts.Highcharts)

import HighChart from 'components/Charts/HighChart'

import { transparentize } from 'polished'
import { cryptocurrencies } from 'utils/cryptocurrencies'




export default class HoldingsTreeMap extends HighChart {

  chart = null

  render(){

    const data = [
      { y: 50, color: 'red' },
      { y: 50, color: m.colors.black10 },
    ]

    const config = { ...CONFIG }
    config.series[0].data = data

    return(
      <div style={{width:'100%', height:440, flex:1}}>
        <ReactHighcharts
          ref={ ref => this.chart = ref }
          config={config}
          style={{width:'100%', height:440}}
        />
      </div>
    )
  }


}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  `



const linesColor = '#4B555D'
const textColor = '#BCC0C2'

const CONFIG = {
  title: { text: '' },
  plotOptions: {
    series: {
      animation: { duration: 200 },
      states: { hover: { enabled: false } },
    },
  },
  legend: { enabled: false },
  tooltip: { enabled: false },
  chart: { backgroundColor: 'transparent', borderRadius: 8, },
  series: [
    {
      type: 'pie',
      data: data,
      innerSize: '50%',
      dataLabels: { enabled: false },
    }
  ],
}
