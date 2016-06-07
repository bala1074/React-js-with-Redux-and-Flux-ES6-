var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
	      <div className='main-container'>
	      <h1>Hello From Main Route</h1>
	        {this.props.children}
	      </div>
    )
  }
});

module.exports = Main;
