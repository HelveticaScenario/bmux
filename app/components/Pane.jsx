import React, { Component } from 'react';
import styles from './Pane.module.css';

export default React.createClass({
    getDefaultProps(){
        return {
            split: 'NONE',
            src: 'NONE',
            path: 'top'
        }
    },
    render() {
        let {className, splitPane, path, ...props} = this.props
        return (
            <div className={className + ' pane'}>
                <div className="menu">
                    <button onClick={_=>splitPane(path, 'horizontal')}>split horizontal</button>
                    <button onClick={_=>splitPane(path, 'vertical')}>split vertical</button>
                </div>
                <webview {...props}/>
            </div>
        );
    }
});
