// @flow
import { isEmpty } from 'utils/utils'
import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'

import Area from 'components/Charts/Area'
import { transparentize } from 'polished'

import downsampler from 'utils/downsampler'

export default class SparkVolumeLine extends Component {

  static defaultProps = {
    symbol: 'BTC'
  }

  state = {
    data: [],
    min: 0,
    max: 0,
  }

  chart = {}

  componentWillMount(){
    const { symbol } = this.props
    fetch(`http://coincap.io/history/7day/${symbol}`)
      .then( response => {
        return response.json()
      })
      .then( result => {
        console.log(`body`, result.price )
        const minAndMax = this.getMinMaxFromData( result.price )
        const DOWNSAMPLING_THRESHOLD = 20
        this.setState({
          data: downsampler(result.price, DOWNSAMPLING_THRESHOLD, 0, 1),
          min: minAndMax.min,
          max: minAndMax.max,
        })
      })
  }

  render(){
    if( isEmpty(this.state.data)  ) return null
    return(
      <Wrapper>
        <ReactHighcharts
          ref={ ref => this.chart = ref }
          config={this.getConfig()}
        />
      </Wrapper>
    )
  }

  getMinMaxFromData( data: Array<Array<number>> ){
    let min = data[0][1]
    let max = 0

    for( const dataPoint of data ){
      if( dataPoint[1] > max )
        max = dataPoint[1]
      if( dataPoint[1] < min )
        min = dataPoint[1]
    }
    return { min: min, max: max }
  }


  getConfig(){
    const { data, min, max } = this.state

    console.log(`min`, min )
    console.log(`max`, max )

    const changeIsPositive = data[0][1] < data[data.length-1][1]

    const color = changeIsPositive ? m.colors.green : m.colors.red
    const height = 65

    return {
      title: null,
      credits: { enabled: false },
      chart: {
        width: 200,
        height: height,
        backgroundColor: null,
        borderWidth: 0,
        margin: [0,0,0,0],
        skipClone: true,
      },
      plotOptions: {
        series: {
          animation: { duration: 200 },
          states: { hover: { enabled: false } },
        },
        area: {
          borderColor:'transparent',
          dataLabels: {
            enabled: false
          }
        },
      },
      legend: { enabled: false },
      tooltip: { enabled: false },
      series: [
        {
          type: 'area',
          data: data,
          color: color,
          fillColor: {
            linearGradient: [0, 0, 0, height],
            stops: [ [0, color], [1, transparentize(2, 'white')] ],
          },
          lineWidth: 1,
          dataLabels: { enabled: false },
        }
      ],
      yAxis: {
        gridLineWidth: 0,
        min: min,
        max: max,
        labels: { enabled: false },
        title: null,
      },
      xAxis: {
        labels: { enabled: false },
        title: null,
      }
    }
  }

}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` width:200px; border:1px solid black; `
