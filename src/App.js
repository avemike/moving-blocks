import React, { Component } from 'react';
import Block from './Block';
import './app.css'
const info = ["That's it. Simple home and nothing more", 
              "That's it. Simple contact and nothing more",
              "That's it. Simple thirdTitle and nothing more", ];
class App extends Component {
  constructor() {
    super();
    this.state = {
        listOfBlocks: []
    }
  }
  componentDidMount() {
    const blocks = document.querySelectorAll('.block');
    this.state.listOfBlocks = [...blocks];
  }
  handleClick(e) {
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
      <div className="App">
        <Block onClick={this.handleClick.bind(this)} position="left" title="Home" basicInfo={info[0]}/>
        <Block onClick={this.handleClick.bind(this)} position="center" title="Contact" basicInfo={info[1]}/>        
        <Block onClick={this.handleClick.bind(this)} position="right" title="ThirdTitle" basicInfo={info[2]}/>        
      </div>
    );
  }
}

export default App;
