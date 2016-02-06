import React, { Component, PropTypes } from 'react'
import Rect from '../structures/rect.js'
import { DisplayNode } from '../structures/node.js'
let {SPLIT_TYPES: {HORIZONTAL, VERTICAL}} = Rect

export default React.createClass({
    getInitialState(){ return { uri: 'https://google.com' } },
    contextTypes: {
        actions: React.PropTypes.object
    },
    propTypes : {
        node: PropTypes.instanceOf(DisplayNode), 
    },
    handleKeyPress: function(e) {
        if (e.key === 'Enter') {
            this.props.setPane(this.props.path, this.state)
        }
    },
    render() {
        let {node, path} = this.props
        let { splitPane } = this.context.actions
        return (
            <div className={'pane'}>
                <div className="menu">
                    <input value={node.uri} onChange={e => this.setState({uri: e.target.value})} onKeyPress={this.handleKeyPress}/>
                    <button onClick={_=>splitPane({path: path, splitType: HORIZONTAL})}><i className="fa fa-arrow-right"></i></button>
                    <button onClick={_=>splitPane({path: path, splitType: VERTICAL})}><i className="fa fa-arrow-down"></i></button>
                </div>
                <webview src={this.state.uri}/>
            </div>
        );
    }
});
