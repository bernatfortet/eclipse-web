// @flow
// Highcharts Treemap docs: http://api.highcharts.com/highcharts/series%3Ctreemap%3E
import React, { Component } from 'react'

// HighCharts Imports
import ReactHighcharts from 'react-highcharts'
import HighchartsTreemap from 'highcharts-treemap'
HighchartsTreemap(ReactHighcharts.Highcharts)


import { transparentize } from 'polished'
import { cryptocurrencies } from 'utils/cryptocurrencies'

const rawData = [
  { ...cryptocurrencies['BTC'], value: 4000 },
  { ...cryptocurrencies['ETH'], value: 3400 },
  { ...cryptocurrencies['LTC'], value: 2123 },
  { ...cryptocurrencies['NEO'], value: 1987 },
  { ...cryptocurrencies['DASH'], value: 1433 },
]

const data = fadeDataColors(rawData)

export default class HoldingsTreeMap extends Component {

  chart = null

  render(){
    return(
      <div style={{width:'100%', height:440, flex:1}}>
        <ReactHighcharts
          ref={ ref => this.chart = ref }
          config={CONFIG}
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
  credits: { enabled: false },
  plotOptions: {
    series: {
      animation: { duration: 200 },
      marker: { enabled: false },
    },
  },
  legend: { enabled: false },
  tooltip: { enabled: false },
  chart: { backgroundColor: 'transparent', borderRadius: 8, },
  series: [
    {
      type: 'treemap',
      layoutAlgorithm: 'squarified',
      states: {
        hover: { borderColor:'transparent',  },
      },
      data: data,
      colorByPoint: true,
      dataLabels: {
        useHTML: true,
        formatter: function() {
          // console.log(`this.point`, this.point )
          return renderCoinImage( this.point )
        }
      }
    }
  ],
}

function fadeDataColors( coins: Array<Object> ){
  const newCoins = []
  for( const coin of coins ){
    const newCoin = { ...coin }
    newCoin.color = transparentize( 0.7, coin.color )
    newCoins.push(newCoin)
  }
  return newCoins
}



const renderCoinImage = ( coin: Object ) => {
  const coinImageUrl = `https://files.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`
  const size = 32
  const border = 4
  const coinName = '123'

  const containerStyle = `display:block-inline;`
  const nameStyle = `font-size:24px; text-align:center; color:${m.colors.black};`
  const imgStyle = `display:block; margin:0 auto; position:relative; top:${border}px; left:${border}px;`
  return `
    <div style='${containerStyle}'>
      <img src='${coinImageUrl}' width='${size}' height='${size}' style='${imgStyle}'  />
      <div class='circular' style='${nameStyle}'>${coin.name}</div>
    </div>
  `
}

//<div style=' width:${size+border*2}px;  height:${size+border*2}px; border-radius:50%; background:rgba(255,255,255,0.2); '>
// </div>
