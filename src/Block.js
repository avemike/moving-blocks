import React, { Component } from 'react';
import BackgroundCanvas from './BackgroundCanvas';

class Block extends Component {
    render() {
        return (
        <div onClick={this.props.onClick} className={'block '+ this.props.position}> 
            <div className="text">
                <h1>{this.props.title}</h1>
                {this.props.children}   
            </div>
        </div>
        );
    }
}

export default Block;
