import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import Options from '../Options';

export default function Video(props) {
    let navigate = useNavigate();
    let { video_name, video_url, video_id } = props.video;

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
        <div className='w-5/6 h-64 rounded-md font-semibold cursor-pointer items-center justify-between p-2  m-2 bg-indigo-300 hover:scale-110'>
            <div onClick={navigateToVideoPage} className=''>
                <ReactPlayer url={video_url} height='280' width='360' ></ReactPlayer>
                <p className='text-gray-50 text-ellipsis overflow-hidden '>{video_name}</p>
            </div>
            <Options></Options>
        </div>
    )
}
