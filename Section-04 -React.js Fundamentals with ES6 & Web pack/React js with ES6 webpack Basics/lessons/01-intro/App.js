//https://jsbin.com/nequdiy/edit?js,output

import React from 'react';

class App extends React.Component {
  render(){
    return <h1>Hello Guys  <Child/>   </h1>
  }
}

 const Child = props => <h1>Data from Child  {this.props.data}</h1>

export default App
