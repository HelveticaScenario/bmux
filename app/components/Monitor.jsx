import React, { Component } from 'react';
import { Link } from 'react-router';
import objectPath from 'object-path-immutable';
import Node from './Node';
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
        let { monitor: {desktops: [{root: root}]} } = this.props
        return (
            <div className="root">
                <Node path={[]} node={root} />
            </div>
        );
    }
});
