var React = require('react')
var ReactDOM = require('react-dom')


var HelloWorld = React.createClass({	
  render: function(){
    return (
    <div>
      <h1>Hello I am Tarun</h1>
       <p> Hello World! I am React Developer</p>
     </div>
      //jsx code 
    )
  }
});

ReactDOM.render(<HelloWorld  name="tarun"/>  , document.getElementById('app'));


// webpack is bundeling everything in one common bundle.js
