import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Video from './Video';
import VideoHome from './VideoHome';
import Header from './Header';
import Folders from './Folders';

export default function VideoList() {
    const [videos, setVideos] = useState();

    

    return (
        <div>
            <Header />

            <main className='flex mt-16'>
                <div className=' folders-component ml-8 mr-8 basis-1/4'>
                    <Folders />
                </div>
                <VideoHome/>
                {/* <div className=' video-frame flex flex-1 flex-col'>
                    {videos && videos.map(video => {
                        return <Video video={video}></Video>
                    })}
                </div> */}
            </main>
        </div>
    )
}
