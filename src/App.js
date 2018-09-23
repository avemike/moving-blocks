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
        listOfBlocks: [],
        centerIndex: undefined,
        shift: 0,
        minIndexOrder: undefined,
        maxIndexOrder: undefined
    }
  }
  componentDidMount() {
    const blocks = document.querySelectorAll('.block');
    this.state.listOfBlocks = [...blocks];
    
    this.state.centerIndex = Math.floor(this.state.listOfBlocks.length / 2);
    
    for(let i = 0, end = this.state.listOfBlocks.length; i < end; i++) {
      this.state.listOfBlocks[i].order = i;
    }

    this.state.minIndexOrder = 0;
    this.state.maxIndexOrder = this.state.listOfBlocks.length -1;
  
    this.segregateBlocks();
    this.state.listOfBlocks[this.state.centerIndex].classList.remove('center-focused');
  }
  updateClasses() {
    for(let i = 0, max = this.state.listOfBlocks.length; i < max; i++) {
      const current = this.state.listOfBlocks[i];
      
      if(current.order < this.state.centerIndex) {
        current.classList.replace(current.classList[1], "left");
        current.classList.remove('center-focused');     
        current.classList.remove('covering');                   
      } else if(current.order > this.state.centerIndex) {
        current.classList.replace(current.classList[1], "right");
        current.classList.remove('center-focused');           
        current.classList.remove('covering');                    
      } else {
        current.classList.replace(current.classList[1], "center");
        current.classList.add('center-focused');           
      }

      //add covering
      if(current.order - 1 === this.state.centerIndex || current.order + 1 === this.state.centerIndex) {  
        current.classList.add('covering');                           
      }
    }
  }
  segregateBlocks() {
    //shift orders of blocks
    for(let i = 0, end = this.state.listOfBlocks.length; i < end; i++) {
      const currentElem = this.state.listOfBlocks[i];
      
      if(currentElem.order + this.state.shift < 0) {          //if elem falls from the edge to the other side (left -> right)
        currentElem.order = 
          this.state.maxIndexOrder 
          + this.state.shift 
          + currentElem.order 
          + 1; 
      } else if (currentElem.order + this.state.shift > this.state.maxIndexOrder) {  //if elem falls from the edge to the other side (right -> left)
        currentElem.order = 
          this.state.minIndexOrder 
          + this.state.shift 
          - 1
          - (this.state.maxIndexOrder - currentElem.order);
        } else {
          currentElem.order = 
            currentElem.order
            + this.state.shift;
        }
    }
    this.state.shift = 0;
    this.updateClasses();
  }
  handleClick(e) {
    //return element with class === 'block'
    const getTheBlock = function (target) {
      if(target.className.includes('block')) return target;
      else return getTheBlock(target.parentNode);
    }
 
    const target = getTheBlock(e.target);
    const targetIndex = target.order;
    
    this.state.shift = this.state.centerIndex - targetIndex; 
    if(this.state.shift === 0) {
      target.classList.toggle('center-focused');
    }
    else this.segregateBlocks();
  }
  render() {
    return (
      <div className="App">
        <Block onClick={this.handleClick.bind(this)} title="Contact" basicInfo={info[1]}/>        
        <Block onClick={this.handleClick.bind(this)} title="ThirdTitle" basicInfo={info[2]}/>              
        <Block onClick={this.handleClick.bind(this)} title="New Game" basicInfo={info[0]}/>
        <Block onClick={this.handleClick.bind(this)} title="ThirdTitle" basicInfo={info[2]}/>        
        <Block onClick={this.handleClick.bind(this)} title="ThirdTitle" basicInfo={info[2]}/>        
      </div>
    );
  }
}

export default App;
