import React from 'react';
import ReactDOM from 'react-dom';
var React = require('react')
var ReactDOM = require('react-dom')

// parent child relationship
// data flow

var FriendsContainer = React.createClass({
	render: function(){
		var name = 'Tyler McGinnis'
		var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
		return (
			<div>
				<h3> Name: {name} </h3>
				<ShowList names={friends} />
			</div>
		);
	}
});
var ShowList = React.createClass({
	render: function(){
		var listItems = this.props.names.map(function(friend){
			return <li key={friend}> {friend} </li>;
		});
		return (
				<ul>
					{listItems}
				</ul>
		);
	}
});
ReactDOM.render(<FriendsContainer name="tarun" />, document.getElementById('app'));



