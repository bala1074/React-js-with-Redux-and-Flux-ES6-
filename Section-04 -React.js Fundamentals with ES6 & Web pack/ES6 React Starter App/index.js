import React, {Component }  from 'react';
import {render} from 'react-dom';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSerach from 'youtube-api-search';
const API_KEY = 'AFEFSDADASC78S78CX8CD57';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			videos : [],
			selectedVideo : videos[0]
		};
		this.videoSearch('React');
	}
              videoSearch(searchkey){
               YTSerach({key :  API_KEY , term :  searchkey} , (videos) =>{
                       this.setState({
                       	videos : videos,
                       	selectedVideo : videos[0]
                       })
               })
              }
	render(){
		return(<div>
                             <SearchBar  OnSearchInputChange={term => { this.videoSearch(term)}} />
                             <VideoDetail  video={this.state.selectedVideo} />
                             <VideoList    onVideoSelect={video => this.setState({selectedVideo :  video)}
                              videos={this.state.videos} />
		</div>)
	}
}

render(<App/>, document.getElementById('app'));