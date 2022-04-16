import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Video from './Video';

const siyasToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY"
const ramsToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJhbSIsImVtYWlsIjoicmFtQGdtYWlsLmNvbSIsInVzZXJfaWQiOiI2MjU1M2U0MzgzMWEyYjE4N2IyZWEyZDciLCJpYXQiOjE2NDk3NTM2Njd9.jcOqw_X7Ve7KyL3SZcfVWQN4xDfYeOFE4KSbep1P3f0"

export default function VideoHome() {
    const [videos, setVideos] = useState();
    let host = "https://Backend-1.prathameshdukare.repl.co"

    useEffect(() => {
        axios.get(`${host}/api/v1/videos`, {
            headers: {
                Authorization: `Bearer ${ramsToken}`
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
