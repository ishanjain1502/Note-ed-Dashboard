import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Video from './Video';

export default function VideoList() {
const [videos,setVideos]=useState();


useEffect(()=>{
    console.log("here");
    axios.get('http://localhost:8000/api/v1/videos',{
        headers:{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY'
        }
    }).then(data=>{
        console.log(data);
        if(data.data.message==='success'){
            setVideos(data.data.videos);
            
        }
    }).catch(err=>{
        console.log(err);
    })
},[]);


  return (
      

    <div>
        {videos && videos.map(video=>{
            return <Video video={video}></Video>
        })}
    </div>
     
  )
}
