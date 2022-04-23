import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import Options from '../Options';

export default function Video(props) {
    const [updatedVideoName,setUpdatedVideoName]=React.useState();
    const updateVideoName=(newVideoName)=>{
        setUpdatedVideoName(newVideoName);
    }
    let navigate = useNavigate();
    let { video_name, video_url, video_id } = props.video;

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
        <div className='w-6/7 h-64 rounded-md font-semibold cursor-pointer items-center justify-between p-2 drop-shadow-md m-2 bg-white  hover:drop-shadow-2xl hover:bg-new-green hover:scale-105'>
            <div onClick={navigateToVideoPage} className=''>
                <ReactPlayer url={video_url} height='320' width='480' ></ReactPlayer>
                {/* {
                    video_name = video_name.slice(0 , 40) + (video_name.length > 20 ? ". . ." : " ")
                } */}
                <p className='text-new-green text-ellipsis overflow-hidden '>{updatedVideoName || video_name}</p>
            </div>
            <Options video_id={video_id} updateVideoName={updateVideoName} deleteVideoFromArray={props.deleteVideoFromArray}></Options>


           
        </div>
    )
}
