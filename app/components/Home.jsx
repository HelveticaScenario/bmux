import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.module.css';
import Split from './Split';

function assign(obj, prop, value) {
    if (typeof prop === "string")
        prop = prop.split(".");

    if (prop.length > 1) {
        var e = prop.shift();
        assign(obj[e] =
                 Object.prototype.toString.call(obj[e]) === "[object Object]"
                 ? obj[e]
                 : {},
               prop,
               value);
    } else {
        obj[prop[0]] = value;
    }

    return obj
}

export default React.createClass({
    getInitialState() {
        return {
            root: {
                split: 'NONE',
                path: 'root',
                type: 'root',
                src: 'NONE'
            }
        }
    },
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
        console.log(path, splitDirection, assign(this.state, path, splits[splitDirection]))
        this.setState(Object.assign({root: this.state.root}, assign(this.state, path, splits[splitDirection])))
    },
    render() {
        return (
            <div className={styles.container}>
                <Split splitPane={this.splitPane} {...this.state.root} />
            </div>
        );
    }
});
