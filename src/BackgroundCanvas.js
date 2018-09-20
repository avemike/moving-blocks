import React, { Component } from 'react';
class BackgroundCanvas extends Component {
    constructor() {
        super();
    }
    getRandomColor() {
        let param = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0; i < 6; i++) {
            color += param[Math.floor(Math.random()*16)];
        }
        return color;
    }
    componentDidMount() {
        /*const ctx = document.getElementById(this.props.id).getContext('2d');
        let radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
        radgrad.addColorStop(0, this.getRandomColor());
        radgrad.addColorStop(0.3, this.getRandomColor());
        radgrad.addColorStop(0.4, '#ffffff');


        ctx.fillStyle = radgrad;
        ctx.fillRect(0, 0, 200, 200); */
    }
    render() { 
        return (
            <canvas id={this.props.id} width="400" height="400"></canvas>
        );
  }
}

export default BackgroundCanvas;
