// @flow
import React, { Component } from 'react'

import Screen from 'app/Screens/Screen'

import { Redirect } from 'react-router';


export default class HomeScreen extends Screen {

  componentWillMount(){

  }

  render(){
    return(
      <div>
        <Redirect to="/dashboard"/>
      </div>
    )
  }

}
