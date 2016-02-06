import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Monitor from '../components/Monitor';

let MonitorActions = {
    createSplit: (payload) => {
        return {
            type: 'CREATE_SPLIT',
            payload
        }
    },
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
