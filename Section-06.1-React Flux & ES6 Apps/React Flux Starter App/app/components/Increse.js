var React = require('react')
var ReactDOM = require('react-dom')
var AppStore = require('AppStore');

var Increase = React.createClass({
        handler : function(){
           AppAction.Incitem(this.props.index);
        },
        render: function() {
            return (<div><button onClick={this.handler} >+ </button>
            <div>);
        }
});


module.export = Increase;

