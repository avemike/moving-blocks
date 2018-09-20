import React, { Component } from 'react';
import Block from './Block';
import './app.css'
const info = ["That's it. Simple home and nothing more", 
              "That's it. Simple contact and nothing more",
              "That's it. Simple thirdTitle and nothing more", ];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Block position="left" title="Home" basicInfo={info[0]}/>
        <Block position="center" title="Contact" basicInfo={info[1]}/>        
        <Block position="right" title="ThirdTitle" basicInfo={info[2]}/>        
      </div>
    );
  }
}

export default App;
