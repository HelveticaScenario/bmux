import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { splitPane } from '../actions/node'

import Monitor from '../components/Monitor'

let MonitorActions = {
    splitPane: splitPane,
    deleteSplit: (payload) => {
        return {
            type: 'DELETE_SPLIT',
            payload
        }
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MonitorActions, dispatch)
  }
}

export default connect(
    state => state,
    mapDispatchToProps
)(Monitor)
