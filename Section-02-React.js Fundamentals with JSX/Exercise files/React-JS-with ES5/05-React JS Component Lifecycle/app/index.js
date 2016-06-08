var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({
	incrementCount: function(){
		this.setState({
			count: this.state.count + 1
		});
	},
	getDefaultProps: function(){
		console.log("getDefaultProps.........");
		return {
			count: 0
		}
	},
	getInitialState: function(){
		console.log("getInitialState.........");
		return {
			count: 0
		}
	},
	componentWillMount : function() {
		console.log('Component WILL MOUNT!')
			//
		},
		componentDidMount: function(){
			console.log('Component DID MOUNT!')
		},
		componentWillUnmount: function(){
			console.log('Component WILL UNMOUNT!')
		},
		shouldComponentUpdate: function(nextProps, nextState){
			// return a boolean value
			console.log("shouldComponentUpdate...........")
			return false;
		},
		componentWillUpdate: function(nextProps, nextState){
			// perform any preparations for an upcoming update
			console.log("componentWillUpdate...........")
		},
		componentDidUpdate: function(prevProps, prevState){
			console.log("componentDidUpdate...........")
		},
		render: function(){
			console.log("render function.........");
			return (
				<div styleName=".counter">
				<h1>{this.state.count}</h1>
				<button type="button" onClick={this.incrementCount}>Increment</button>
				</div>
				);
		}
		});

ReactDOM.render(<Counter />, document.getElementById('app'));

