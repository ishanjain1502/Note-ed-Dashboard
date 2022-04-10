import React from 'react'
import { Redirect, useNavigate } from 'react-router-dom'
import Options from './Options';

export default function Video(props) {
    let navigate = useNavigate();
    let { video_name, video_url, video_id } = props.video;
    console.log(props,"all props")
    const navigateToVideoPage = () => {
        console.log('clicked on video...');
        navigate(`/video/${video_name}`, {
            state: {
                video_url,
                video_id
            }
        });
    }
    return (
        <div className='w-3/4 h-14 rounded-md font-semibold cursor-pointer flex  items-center justify-between pl-2  mb-4 bg-indigo-300'>
            <div onClick={navigateToVideoPage} className='flex'>
                <p className='text-gray-50 '>{video_name}</p>
            </div>
            <Options></Options>
        </div>
    )
}
