import React, {Component }  from 'react';

class SearcBar extends Component {
     constructor(props){
       super(props);
       this.state = {term : ''};
       //this.HandleChange = this.HandleChange.bind(this);
     }
     onInputChnage(term){
     	this.setState({term :  term});
     	// event will be fired to fetch the data from youtube API 
     }
     render : function(){
     	return (    <div className="search-bar">
                               <input type="text" value={this.state.term} 
                               onChange={function(e) { this.onInputChnage(e.target.value)}}
     		</div>);
     }
}

export default SearcBar;