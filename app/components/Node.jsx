import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Pane from './Pane';
import Split from './Split';
import {TreeNode, DisplayNode} from '../structures/node.js'

export default Node = React.createClass({
    propTypes : {
        node: PropTypes.oneOfType([
            PropTypes.instanceOf(TreeNode), 
            PropTypes.instanceOf(DisplayNode), 
        ]),
    },
    treeNode(path, node) {
        return (
            <div className={`${node.splitType.display} split`}>
                <Node node={node.firstChild} path={path.concat([0])}/>
                <Node node={node.secondChild} path={path.concat([1])}/>
            </div>
        );
    },
    render(){
        let {path, node} = this.props
        if (node instanceof DisplayNode) {
            return (<Pane {...this.props}/>);
        } else if (node instanceof TreeNode) {
            return this.treeNode(path, node);
        }
    }
});
