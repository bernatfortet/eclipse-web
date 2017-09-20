// @flow
import React, { Component } from 'react'
import Routes from 'config/routes'


class App extends Component {

  componentWillMount(){
    this.props.onInitApp()
  }

  render() {
    return <Routes />
  }


}

//Redux Setup
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onInitApp } from './controllers/init'
import * as selectors from './controllers/selectors'

const mapStateToProps = (state, props) => ({
})
const mapDispatchToProps = dispatch => bindActionCreators({ onInitApp}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
