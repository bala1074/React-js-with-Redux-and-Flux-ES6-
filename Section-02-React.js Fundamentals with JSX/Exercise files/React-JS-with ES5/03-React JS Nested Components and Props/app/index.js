import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  render(){
    let txt = this.props.txt
    let catnum = this.props.cat;
    return <h1>{txt}{catnum}</h1>
  }
}
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps ={
  txt: 'this is the default txt'
}

ReactDOM.render(
  <App cat={5} txt="hello" />,
  document.getElementById('app')
);
