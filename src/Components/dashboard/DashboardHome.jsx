import React from 'react'
import VideoHome from './videos/VideoHome';
import Header from './Header';
import Folders from './Folders';

export default function VideoList() {
    return (
        <div>
            <Header />
            <main className='flex mt-16'>
                <div className=' folders-component ml-8 mr-8 basis-1/4'>
                    <Folders />
                </div>
                <VideoHome />
            </main>
        </div>
    )
}
