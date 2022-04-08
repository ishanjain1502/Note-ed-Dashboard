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
    <div className='w-3/4 h-14 rounded-md font-md cursor-pointer flex content-center pl-2 pt-2 mb-4 bg-indigo-300'>
        <p onClick={navigateToVideoPage}>{video_name}</p>
    </div>
  )
}
