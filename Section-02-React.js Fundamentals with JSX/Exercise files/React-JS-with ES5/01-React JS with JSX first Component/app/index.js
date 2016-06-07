var React = require('react')
var ReactDOM = require('react-dom')

// props object
var HelloWorld = React.createClass({
    render: function () {
        return (
            <h1 className="title">Hello World! My Name is {this.props.name}</h1>
            //jsx code
        );
    }
});// ES6 class  class="container"

ReactDOM.render(<HelloWorld name="Mahir" >hello World</HelloWorld>, document.body);
//props  //this.props.name
//state    // this.state.name




