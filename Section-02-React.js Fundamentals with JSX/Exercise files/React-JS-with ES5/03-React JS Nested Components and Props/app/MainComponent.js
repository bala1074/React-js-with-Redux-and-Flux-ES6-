var React = require('react')
var ReactDOM = require('react-dom')


var Main = React.createClass({
    render : function(){
    	return <h1>Hello from Main Comp :-   {this.props.children}</h1>

    }

});
module.export = Main;
