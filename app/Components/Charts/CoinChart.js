// @flow
import { isEmpty } from 'utils/utils'
import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'

import { transparentize } from 'polished'
import downsampler from 'utils/downsampler'

import { BTC } from 'utils/chartData'

export default class CoinChart extends Component {

  static defaultProps = {
    symbol: 'BTC'
  }

  state = {
    data: [],
    min: 0,
    max: 0,
  }

  chart = {}

  fetchAndStoreData(){
    const { symbol } = this.props


    this.storeData( BTC.price )

    // fetch(`http://coincap.io/history/90day/${symbol}`)
    //   .then( response => {
    //     return response.json()
    //   })
    //   .then( result => {

    //   })
  }

  storeData( data: Array<Array<number>> ){
    const minAndMax = this.getMinMaxFromData( data )
    this.setState({
      data: data,
      min: minAndMax.min,
      max: minAndMax.max,
    })
  }

  componentWillMount(){
    this.fetchAndStoreData()
  }

  componentWillReceiveProps(){
    this.setState({ data: [] })
    this.fetchAndStoreData()
  }

  render(){
    console.log(`this.state.data`, this.state.data )
    // if( isEmpty(this.state.data)  ) return null
    return(
      <Wrapper>
        <ReactHighcharts ref={ ref => this.chart = ref } config={this.getConfig()} />
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
    const color = m.colors.brand

    const chartColor = color

    return {
      title: null,
      credits: { enabled: false },
      legend: { enabled: false },
      chart: {
        backgroundColor: null,
        borderWidth: 0,
        height: height,
        margin: [0,-14,0,-14],
        skipClone: true,
      },
      plotOptions: {
        series: {
          animation: null,
          states: { hover: {
            lineWidth: 1,
            marker: {

            }
          }},
        },
        area: {
          borderColor:'transparent',
        },
      },
      tooltip: {
        backgroundColor: chartColor,
        borderWidth: 0,
        borderRadius:4,
        style: { color: 'white' },
        shadow: false,
        formatter: function (){
          // TODO cut decimals
          return this.y
        }
      },
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
        }
      ],
      yAxis: {
        title: null,
        gridLineWidth: 0,
        min: min,
        max: max,
      },
      xAxis: {
        title: null,
        crosshair: {
          snap: true,
          color: m.colors.black20,
          width: 1,
        },
        labels: {
          padding:20,
          distance:50,
          style: { color: 'red', fontWeigth: 'bold', marginTop:'8px', fontSize: '10px' },
        }
      }
    }
  }


}

const height = 280

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div` display:block; position:relative; width:100%; min-height:${height}px; height:${height}px; background:white; `
