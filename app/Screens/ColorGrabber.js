// @flow
import React, { Component } from 'react'

import RGBaster from 'utils/RGBaster.js'

import { cryptocurrencies } from 'utils/cryptocurrencies'
import { urls } from 'utils/coinImagesUrls.js'
import { coins } from 'utils/coinslist.js'

export default class ColorGrabber extends Component {

  static defaultProps = {
    obj: '',
  }

  constructor(){
    super()

    this.getStuff()
  }

  getStuff(){
    const newCryptocurrencies = {}
    for( const id in cryptocurrencies ){
      const coin = cryptocurrencies[id]
      const coinName = coin.id
      this.getColor( `http://localhost:3000/coins/${coin.id}.png` )
        .then( color => {
          console.log(`Coin`, `${coinName} —— ${color}` )
          newCryptocurrencies[id] = {
            ...coin,
            color: color,
          }
          console.log(`newCryptocurrencies`, newCryptocurrencies )
        })
    }
  }

  render(){
    return(
      <div></div>
    )
  }

  getColor( imageUrl: string ){
    return new Promise( (resolve, reject) => {
      RGBaster.colors(imageUrl, {
        success: function(payload) {
          let color = payload.dominant

          if( color == 'rgb(255,255,255)' )

          color = payload.secondary

          // console.log(payload.dominant);
          return resolve(color)
          // return color
          // console.log(payload.secondary);
          // console.log(payload.palette);
        }
      });
    })

  }

  componentDidMount(){



    // const img = document.getElementById("neuro")


    // console.log(`color`, color )


  }






}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`  `
