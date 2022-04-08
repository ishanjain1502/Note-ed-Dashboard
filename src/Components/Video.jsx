import React from 'react'
import { Redirect, useNavigate } from 'react-router-dom'
export default function Video(props) {
    let navigate=useNavigate();
    let {video_name,video_url,video_id}=props.video;
    console.log(video_id);
    const navigateToVideoPage=()=>{
        console.log('click');
        navigate(`/video/${video_name}` , {state:{
            video_url,
            video_id
        }});
       
    }
  return (
    <div>
        <p onClick={navigateToVideoPage}>{video_name}</p>
    </div>
  )
}
