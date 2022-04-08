import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios';
import { useParams,useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
export default function VideoPage(props) {
    let {videoname}=useParams();
    let {state}=useLocation();
    let {video_url,video_id}=state;
useEffect(()=>{
    fetchNotes();
},[])


const player=useRef();


const [timestamp,setTimstamp]=useState();


const fetchNotes=(name)=>{
    axios.get(`http://localhost:8000/api/v1/video/${videoname}`,{
        headers:{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY'
        }
    }).then(data=>{
        console.log(data);
        setTimstamp(data.data.data);
        
    })
}


const convertToseconds=(time)=>{
    const timeArr=time.split(":");
    let sec=0;
    let pow=2;
    timeArr.forEach(time => {
        sec+=(time*Math.pow(60,pow));
        pow--;
    });
    console.log(sec);
    return sec;
}


    
  return (
    
    <>
       <div>VideoPage</div>
       <ReactPlayer ref={player} controls={true} url={video_url} />
			{timestamp && timestamp.map(timestamp=>{
				const time=Object.keys(timestamp);
				const seconds=convertToseconds(time[0]);
				return <p onClick={()=>{
					player.current.seekTo(seconds);
				}}>{time}: {timestamp[time]}</p>
			})}
      </> 


  )

  
}
