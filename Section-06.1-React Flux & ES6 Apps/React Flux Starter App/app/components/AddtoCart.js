var React = require('react')
var ReactDOM = require('react-dom')
var AppStore = require('AppStore');
var AppAction  = require('AppAction');

var AddtoCart = React.createClass({
        handler : function(){
           AppAction.additem(this.props.item);
        },
        render: function() {
            return (<div><button onClick={this.handler} >AddToCart</button>
            <div>);
        }
});


module.export = AddtoCart;

