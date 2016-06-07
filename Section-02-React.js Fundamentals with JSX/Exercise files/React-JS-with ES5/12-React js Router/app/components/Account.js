var React = require('react');
var Link = require('react-router').Link;

var Account = React.createClass({
  render: function () {
    return (
   <div className='main-container'>
      <h1>Hello From Account  Route</h1>
      <ul>
            <li><Link to="/">Users</Link></li>
            <li><Link to="/">Widgets</Link></li>
          </ul>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Account;
