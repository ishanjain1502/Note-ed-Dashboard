import React from 'react';
import { useNavigate } from 'react-router-dom';
import Options from '../Options';
import './Video.css';

export default function Video(props) {
    const [updatedVideoName,setUpdatedVideoName]=React.useState();
    const updateVideoName=(newVideoName)=>{
        setUpdatedVideoName(newVideoName);
    }
    let navigate = useNavigate();
    let { video_name, video_url, video_id } = props.video;
    video_name = video_name.slice(0 , 50) + (video_name.length > 30 ? ". . ." : " ")
    if(typeof video_url !== 'undefined'){
    }else{
        video_url = "https://www.youtube.com/watch?v=" + video_id
    }

    const navigateToVideoPage = () => {
        navigate(`/video/${video_name}`, {
            state: {
                video_name,
                video_url,
                video_id
            }
        });
    }

    
    
    return (
        <div className='w-7/8 h-72 video-card rounded-md font-semibold cursor-pointer items-center justify-between p-2 shadow-xl m-2 bg-white  hover:drop-shadow-2xl  hover:scale-105 hover:transition: 0.25s'>
            
            <div onClick={navigateToVideoPage}>
            <div className='self-center' >
                <img className='' src={`https://img.youtube.com/vi/${video_id}/mqdefault.jpg`}  alt='thumbnail'  / >
                </div>
                {/* {
                    video_name = video_name.slice(0 , 40) + (video_name.length > 20 ? ". . ." : " ")
                } */}
                <p className='pt-2 px-2 text-black text-ellipsis overflow-hidden '>{updatedVideoName || video_name}</p>
            </div>
            <div className='float-right relative bottom-0' >
            <Options  video_id={video_id} updateVideoName={updateVideoName} deleteVideoFromArray={props.deleteVideoFromArray}></Options>
            </div>

           
        </div>
    )
}
