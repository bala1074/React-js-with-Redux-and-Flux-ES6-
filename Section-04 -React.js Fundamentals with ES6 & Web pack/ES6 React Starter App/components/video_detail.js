import React, {Component }  from 'react';

const VideoDetail = function(props){

        const video = this.props.video;
        if(video){
        	return <h6>Loading.........</h6>
        }
        const videoID = video.id.VideoID;
        const URL = `http://youtube.com/embed/${videoID}` ;

        return (<div className="videoDetails col-md-8">
                    <iframe className="embed-respponsive" src={URL}> </iframe>
                    <div>
                            <h5>{video.snippet.title}</h5>
                            <h5>{video.snippet.description}</h5>
                    </div>
        </div>);

};