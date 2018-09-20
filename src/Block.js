import React, { Component } from 'react';
import BackgroundCanvas from './BackgroundCanvas';

class Block extends Component {
    zoom(e) { 
        const getTheBlock = function (target) {
            if(target.className.includes('block')) return target;
            else return getTheBlock(target.parentNode);
        }
        const segregateBlocks = function (target) {
            // [...allBlocks].forEach((block) => {
            //     if(block.className.includes('-focused')) {                
            //         const center = document.querySelector('.center');  
            //         const left = document.querySelector('.left');
            //         const right = document.querySelector('.right');  
                    
            //         if(block.className.includes(' left ')) {
            //             left.className = left.classList[0] + ' center ' + left.classList[2];
            //             center.className = center.classList[0] + ' right ' + center.classList[2];
            //             right.className = right.classList[0] + ' left ' + right.classList[2];
            //         }else if(block.className.includes(' left ')) {

            //         }else {

            //         }
            //     }
            // })    
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
        <div className={'block '+ this.props.position} onClick={this.zoom.bind(this)}> 
            <div className="text">
                <h1>{this.props.title}</h1>
                <p>{this.props.basicInfo}</p>
            </div>
        </div>
        );
    }
}

export default Block;
