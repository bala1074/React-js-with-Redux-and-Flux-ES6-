var React = require('react');
var ReactDOM = require('react-dom');

var app = React.createClass({
	getInitialState() {
		inputValue: ''
	},
	onChange(e) {
		this.setState({ inputValue: e.target.value });
	},
	render() {
		return (
			<input
				type='text'
				value="hello"
				onChange={this.onChange} />
		);
	}


});

ReactDOM.render(<app/>, document.getElementById('app'));
