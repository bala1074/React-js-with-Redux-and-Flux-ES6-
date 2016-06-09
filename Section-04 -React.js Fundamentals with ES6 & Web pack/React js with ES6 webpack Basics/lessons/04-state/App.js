// https://jsbin.com/zijoxu/edit?js,output

import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
    //this.update = this.update.bind(this) 
  }
  render(){
    return (
      <div>
      <input type="text"
        onChange={(event) => { this.setState({txt: e.target.value})}} />
      <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

export default App


