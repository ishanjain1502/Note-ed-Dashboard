import React from 'react';
import Navbar from '../NavBar/Navbar';
import Folders from './Folders';
import Header from './Header';
import VideoHome from './videos/VideoHome';

export default function VideoList() {
    return (
        <div>
            <Navbar/>
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
