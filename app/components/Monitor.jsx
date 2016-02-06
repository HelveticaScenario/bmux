import React, { Component } from 'react';
import { Link } from 'react-router';
import objectPath from 'object-path-immutable';
import Split from './Split';
import _ from 'lodash';
import {TreeNode, DisplayNode} from '../structures/node.js';

export default React.createClass({
    childContextTypes: {
        actions: React.PropTypes.object
    },
    getChildContext(){
        return {actions: this.props.actions}
    },
    render() {
        let { monitor: {desktops: [root]} } = this.props
        console.log(root instanceof TreeNode)
        console.log(root instanceof DisplayNode)
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <Split {...root} />
            </div>
        );
    }
});
