import React from 'react'

export default class  {
	render(){
		return (
			<div> <h1>Hello from repo Comp</h1>
			<h2>{this.props.params.repoName}</h2>
			<h2>{this.props.params.userName}</h2>
			</div>
			);
	}
}

