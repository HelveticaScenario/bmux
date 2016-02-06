import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Pane from './Pane';
import Split from './Split';

export default React.createClass({
    propTypes : {
        split: PropTypes.string.isRequired,
        left: PropTypes.object, right: PropTypes.object,
        top: PropTypes.object, bottom: PropTypes.object,
    },
    pane(pane){
        let type = pane.type
        pane.path = (type == 'root') ? type : pane.path + '.' + type 
        if(pane.split == 'NONE' || !pane.split){
            return (
                <Pane key={type} className={type} {...pane} splitPane={this.props.splitPane} setPane={this.props.setPane}/>
            )
        } else {
            return this.split(pane)
        }
    },
    split(pane) {
        let [firstType, secondType] = this.splitType(pane.split)
        return (
            <div className={`${pane.type} split ${pane.split}`}>
                {this.pane({
                    type: firstType, path: pane.path, ...pane[firstType]
                })}
                {this.pane({
                    type: secondType, path: pane.path, ...pane[secondType]
                })}
            </div>
        );
    },
    render(){
        let {splitPane, setPane, ...props} = this.props
        return this.pane(props)
    }
});
