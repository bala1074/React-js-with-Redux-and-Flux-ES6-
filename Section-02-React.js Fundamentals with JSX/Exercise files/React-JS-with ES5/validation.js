var React = require('react')
var ReactDOM = require('react-dom')


var MyComponent = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		text : React.PropTypes.string.isRequired,
                            dummy: function(props, propName, componentName) {
                                 if(props[propName] !== "xpto") {
                               throw new Error(propName + " must be equal to xpto");
                            }

         }
	},
	getDefaultProps: function() {
		return {
			name : "tarun",
			text : "hello"
		};
	},
	render: function() {
		return <div>
		<h1 className="container" >{this.props.text}</h1>
		<p>{this.props.children}</p>
                        // class="contriner"
                        </div>;
                    }
                });

ReactDOM.render(
	<div>
	<MyComponent dummy="dummy" name="Tarun"  text ="demo">
	This is a hello.
	</MyComponent>
	</div>
	, document.getElementById('app'));


