var React = require('react')
var ReactDOM = require('react-dom')
var style = require('style');

var MenuExample = React.createClass({
	getInitialState: function(){
		return { focused: 0 };
	},
	clicked: function(index){
		this.setState({focused: index});
	},
	render: function() {

		var self = this;

		return (
			<div style={style.tableStyle}>
			<ul>{

				this.props.items.map(function(m, index){
					var style = '';
					if(self.state.focused == index){
						style = 'focused';
					}
					return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
				})
			}
			</ul>
			<p  style={style.tableStyle}>Selected: {this.props.items[this.state.focused]}</p>
			</div>
			);

	}
});

// Render the menu component on the page, and pass an array with menu options

ReactDOM.render(
	<MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
	document.getElementById('container')
	);
