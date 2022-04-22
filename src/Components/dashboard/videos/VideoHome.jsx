import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Video from './Video';

export default function VideoHome() {
    const [videos, setVideos] = useState();
    let host = "http://localhost:8000"

    useEffect(() => {
        const token=localStorage.getItem('token').toString();
        axios.get(`${host}/api/v1/videos/?deleted=false`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(data => {
            console.log(data);
            if (data.data.message === 'success') {
                setVideos(data.data.videos);
            }
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className='video-home'>
            <div className=' video-frame inline-grid grid-cols-1 md:inline-grid md:grid-cols-3 md:gap-1  '>
                {videos && videos.map(video => {
                    return (
                        <div>
                    <Video video={video}></Video>
                        
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
