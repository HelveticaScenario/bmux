import React, { Component } from 'react';
import { Link } from 'react-router';
import objectPath from 'object-path-immutable';
import Split from './Split';
import _ from 'lodash';

export default React.createClass({
    splitPane(path, splitDirection){
        let splits = {
            horizontal: {
                split: 'horizontal',
                left: {split: 'NONE', src: 'NONE'},
                right: {split: 'NONE', src: 'NONE'}
            },
            vertical: {
                split: 'vertical',
                top: {split: 'NONE', src: 'NONE'},
                bottom: {split: 'NONE', src: 'NONE'}
            }
        }

    },
    setPane(path, state){
        this.setState(assign(this.state, path, state))
    },
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <Split setPane={this.setPane} splitPane={this.splitPane} {...this.state.root} />
            </div>
        );
    }
});
