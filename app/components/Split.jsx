import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Pane from './Pane';

export default React.createClass({
    propTypes : {
        split: PropTypes.string.isRequired,
        left: PropTypes.object, right: PropTypes.object,
        top: PropTypes.object, bottom: PropTypes.object,
    },
    splitType(split){
        return {
            'horizontal': ['left', 'right'],
            'vertical': ['top', 'bottom']
        }[split]
    },
    pane(pane){
        let type = pane.type
        console.log(pane)
        pane.path = (type == 'root') ? type : pane.path + '.' + type 
        if(pane.split == 'NONE' || !pane.split){
            return (
                <Pane key={type} className={type} {...pane} splitPane={this.props.splitPane}/>
            )
        } else {
            return this.split(pane)
        }
    },
    split() {
        let [firstType, secondType] = this.splitType(this.props.split)
        return (
            <div className={`split ${this.props.split}`}>
                {this.pane({
                    type: firstType, ...this.props[firstType]
                })}
                {this.pane({
                    type: secondType, ...this.props[secondType]
                })}
            </div>
        );
    },
    render(){
        let {splitPane, ...props} = this.props
        return this.pane(props)
    }
});
