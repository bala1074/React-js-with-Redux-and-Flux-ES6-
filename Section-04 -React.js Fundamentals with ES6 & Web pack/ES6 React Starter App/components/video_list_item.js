import React, {Component }  from 'react';

 const VideoListItem =  function(props){
         const imageurl = props.video.imageurl ;
         return(<li  onClick={() => {props.onVideoSelect(video)}}>
         	<div className="video-list-item">
         	<img className="media-object" src={imageurl} />
         	 <h5>{props.video.snippet.title}</h5>
         	</div>
         	</li>)
 };

 export default VideoListItem;