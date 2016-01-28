import React, { Component } from 'react';

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
        console.log(path)
        return (
            <div className={className}>
                <div className="menu">
                    <button onClick={_=>splitPane(path, 'horizontal')}>split horizontal</button>
                    <button onClick={_=>splitPane(path, 'vertical')}>split vertical</button>
                </div>
                <webview {...props}/>
            </div>
        );
    }
});
