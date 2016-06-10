import React, {Component }  from 'react';

 const VideoList =  function(props){

           const videoItems = props.videos.map(function(video){
                return (<VideoListItem key={video.tag}
                	   onVideoSelect = {props.onVideoSelect}
                                 video = {video}>
                             </VideoListItem>);
            });

           return (<ul class="col-md-4 list-group">
                           {videoItems}
           	</ul>)
 };