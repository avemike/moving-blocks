import React, { Component } from 'react';
import BackgroundCanvas from './BackgroundCanvas';

class Block extends Component {

    zoom(e) { 
        const getTheBlock = function (target) {
            if(target.className.includes('block')) return target;
            else return getTheBlock(target.parentNode);
        }
        const segregateBlocks = function (target) {    
            switch(target.classList[1]) {
                case 'left':
                    document.querySelector('.right').classList.replace('right', 'left');
                    document.querySelector('.center').classList.replace('center', 'right');
                    target.classList.replace('left', 'center');
                break;
                case 'right':
                    document.querySelector('.left').classList.replace('left', 'right');
                    document.querySelector('.center').classList.replace('center', 'left');
                    target.classList.replace('right', 'center');
                    break;
                default: 
                break;
            }
        }
        const target = getTheBlock(e.target);
        const allBlocks = document.querySelectorAll('.block');
        const clickedAlready = target.className.includes('-focused');
        [...allBlocks].forEach((block) => {
            if(block.className.includes('-focused')) {                
                block.className = block.classList[0] + ' ' + block.classList[1];
            }
        });
        segregateBlocks(target);
        if(!clickedAlready) target.className += ' ' + 'center' + '-' + 'focused'; 
    }
    render() {
        return (
        <div onClick={this.props.onClick} className={'block '+ this.props.position}> 
            <div className="text">
                <h1>{this.props.title}</h1>
                <p>{this.props.basicInfo}</p>
            </div>
        </div>
        );
    }
}

export default Block;
