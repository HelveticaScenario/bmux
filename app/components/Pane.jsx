import React, { Component } from 'react';
import styles from './Pane.module.css';

export default React.createClass({
    getInitialState(){ return { src: 'http://google.com' } },
    getDefaultProps(){
        return {
            split: 'NONE',
            src: 'NONE',
            path: 'top'
        }
    },
    handleKeyPress: function(e) {
        if (e.key === 'Enter') {
            this.props.setPane(this.props.path, this.state)
        }
    },
    render() {
        let {className, setPane, splitPane, path, ...props} = this.props
        return (
            <div className={className + ' pane'}>
                <div className="menu">
                    <input value={this.state.src} onChange={e => this.setState({src: e.target.value})} onKeyPress={this.handleKeyPress}/>
                    <button onClick={_=>splitPane(path, 'horizontal')}>⬌</button>
                    <button onClick={_=>splitPane(path, 'vertical')}>⬍</button>
                </div>
                <webview {...props}/>
            </div>
        );
    }
});
